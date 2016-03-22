import { Component } from 'angular2/core';
import { Task } from './task.model';

@Component({
	selector: 'task-display', //render this component's view
	inputs: ['task'], //input is a single task
	template: `
	<h3>{{ task.description }}</h3>
	`
})

export class TaskComponent {
	public task: Task;
}