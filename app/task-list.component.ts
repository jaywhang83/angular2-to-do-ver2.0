import { Component, EventEmitter } from 'angular2/core';
import { TaskComponent } from './task.component';
import { Task } from './task.model';
import { EditTaskDetailsComponent } from './edit-task-details.component';
import { NewTaskComponent } from './new-task.component';
import { DonePipe } from './done.pipe';
import { PriorityPipe } from './priority.pipe';
import { CategoryPipe } from './category.pipe';
import { NewCategoryComponent } from './new-category.component';

@Component({
	selector: 'task-list',
	inputs: ['taskList', 'categoryList'],
	outputs: ['onTaskSelect'],
	pipes: [DonePipe, PriorityPipe, CategoryPipe],
	directives: [TaskComponent, EditTaskDetailsComponent, NewTaskComponent, NewCategoryComponent], // these are all children
	//templateUrl: 'app/task-list.component.html' // If we use templateUrl, we just have to remember that the path is relative to the top level of your project directory because this is where we start our server. So, it's important to include the app/ at the beginning of the templateUrl path, otherwise it won't be located.
	template:
	`
	<select (change)="onChange($event.target.value)" class="filter">
	  <option value="all">Show All</option>
	  <option value="done">Show Done</option>
	  <option value="notDone" selected="selected">Show Not Done</option>
	</select>

	<select (change)="onChange2($event.target.value)" class="filter">
		<option value="high">Show High</option>
		<option value="medium">Show Medium</option>
		<option value="low">Show Low</option>
	</select>

	<select (change)="onChange3($event.target.value)" class="filter">
		<option *ngFor="#category of categoryList" value="{{category}}">show {{category}}</option>
	</select>

	<task-display *ngFor="#currentTask of taskList | done: filterDone | priority: filterPriority | category: [filterCategory, categoryList]"
		(click)="taskClicked(currentTask)"
		[class.selected]="currentTask == selectedTask"
		[task]="currentTask">
	</task-display>
	<edit-task-details *ngIf="selectedTask" [task]="selectedTask">
	</edit-task-details>
	<new-task [childCategoryList]='categoryList' (onSubmitNewTask)="createTask($event)"></new-task>
	<new-category (onSubmitNewCategory)="createCategory($event)"></new-category>
	`

})

export class TaskListComponent {
	public taskList: Task[];
	public categoryList: String[];
	public onTaskSelect: EventEmitter<Task>;
	public selectedTask: Task;
	public filterDone: string = "notDone"; // First, let's create a property in our component controller class to store the value from this menu. We'll set it to a default value of "notDone", since tasks that are not done yet are the first priority for Cameron to see.
	public filterPriority: string = "high";
	public filterCategory: string = "home";
	constructor() {
		this.onTaskSelect = new EventEmitter();
	}

	taskClicked(clickedTask: Task): void {
		console.log('CHILD', clickedTask);
		this.selectedTask = clickedTask;
		this.onTaskSelect.emit(clickedTask);
	}

	createTask(task: Object): void {
		this.taskList.push(
			new Task(task["description"], task["priority"], task["category"], this.taskList.length)
		);
		console.log(this.taskList);
	}

	createCategory(category: String): void {
		this.categoryList.push(category);
	}

	onChange(filterOption) {
		this.filterDone = filterOption;
		console.log(this.filterDone);
	}

	onChange2(filterOption) {
		this.filterPriority = filterOption;
		console.log(this.filterPriority);
	}

	onChange3(filterOption) {
		this.filterCategory = filterOption;
		console.log(this.filterCategory);
	}

}
