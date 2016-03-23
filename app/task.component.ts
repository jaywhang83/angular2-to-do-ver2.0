import { Component } from 'angular2/core';
import { Task } from './task.model';

@Component({
	selector: 'task-display', //render this component's view
	inputs: ['task'], //input is a single task
	template: `
 	<div>
	    <input *ngIf="task.done" type="checkbox" checked (click)="toggleDone(false)"/>
	    <input *ngIf="!task.done" type="checkbox" (click)="toggleDone(true)"/>
	    <label>{{ task.description }}</label>
    </div>
	`
})

export class TaskComponent {
	public task: Task;
	toggleDone(setState: boolean){
		this.task.done = setState;
	}
}
