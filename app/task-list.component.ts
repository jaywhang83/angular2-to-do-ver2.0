import { Component, EventEmitter } from 'angular2/core';
import { TaskComponent } from './task.component';
import { Task } from './task.model';
import { EditTaskDetailsComponent } from './edit-task-details.component';
import { NewTaskComponent } from './new-task.component';
import { DonePipe } from './done.pipe';




@Component({
	selector: 'task-list',
	inputs: ['taskList'],
	outputs: ['onTaskSelect'],
	pipes: [DonePipe],
	directives: [TaskComponent, EditTaskDetailsComponent, NewTaskComponent], // these are all children
	//templateUrl: 'app/task-list.component.html' // If we use templateUrl, we just have to remember that the path is relative to the top level of your project directory because this is where we start our server. So, it's important to include the app/ at the beginning of the templateUrl path, otherwise it won't be located.
	template:
	`
	<select (change)="onChange($event.target.value)" class="filter">
	  <option value="all">Show All</option>
	  <option value="done">Show Done</option>
	  <option value="notDone" selected="selected">Show Not Done</option>
	</select>
	<task-display *ngFor="#currentTask of taskList | done: filterDone"
		(click)="taskClicked(currentTask)"
		[class.selected]="currentTask == selectedTask"
		[task]="currentTask">
	</task-display>
	<edit-task-details *ngIf="selectedTask" [task]="selectedTask">
	</edit-task-details>
	<new-task (onSubmitNewTask)="createTask($event)"></new-task>
	`
})

export class TaskListComponent {
	public taskList: Task[];
	public onTaskSelect: EventEmitter<Task>;
	public selectedTask: Task;
	public filterDone: string = "notDone"; // First, let's create a property in our component controller class to store the value from this menu. We'll set it to a default value of "notDone", since tasks that are not done yet are the first priority for Cameron to see.
	
	constructor() {
		this.onTaskSelect = new EventEmitter();
	}

	taskClicked(clickedTask: Task): void {
		console.log('CHILD', clickedTask);
		this.selectedTask = clickedTask;
		this.onTaskSelect.emit(clickedTask);
	}

	createTask(description: string): void {
		this.taskList.push(
			new Task(description, this.taskList.length)
		);
	}

	onChange(filterOption) {
		this.filterDone = filterOption;
		console.log(this.filterDone);
	}
}