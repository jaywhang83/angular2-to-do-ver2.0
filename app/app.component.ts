import { Component, EventEmitter } from 'angular2/core';
import { TaskListComponent } from './task-list.component';
import { Task } from './task.model';

@Component({
	selector: 'my-app',
	directives: [TaskListComponent],
	template: `
		<div class="container">
			<h1>To-Do List</h1>
			<task-list
				[taskList]="tasks"
				(onTaskSelect)="taskWasSelected($event)">
			</task-list>
		<div>
	`
})

export class AppComponent { //Controller class definition
	public tasks: Task[];
	public categories: String[];
	constructor(){
		this.tasks = [
			new Task("Create To-Do List app.", "low", "home", 0),
			new Task("Learn Kung Fu.", "medium", "home", 1),
			new Task("Rewatch all the Lord of the Rings movies.", "high", "home", 2),
			new Task("Do the laundry.", "high", "work", 3)
		];

	}

	taskWasSelected(clickedTask: Task): void {
		console.log('PARENT', clickedTask);
	}
}
