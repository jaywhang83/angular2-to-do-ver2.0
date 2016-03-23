import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';

@Component ({
	selector: 'new-task',
	outputs: ['onSubmitNewTask'],
	template:`
		<div class="task-form">
			<h3>Create Task:</h3>
			<input placeholder="Description" class="col-sm-8 input-lg" #newDescription>

			<select #priority>
			  <option value="high">High</option>
			  <option value="medium">Medium</option>
			  <option value="low">Low</option>
			</select>

			<button (click)="addTask(newDescription, priority)" class="btn-success btn-lg add-button">Add</button>
		</div>
	`
})

export class NewTaskComponent{
	public onSubmitNewTask: EventEmitter<Object>;
	constructor(){
		this.onSubmitNewTask = new EventEmitter();
	}

	addTask(userDescription: HTMLInputElement, userPriority: HTMLSelectElement){
		this.onSubmitNewTask.emit({description: userDescription.value, priority: userPriority.value});
		userDescription.value = "";
	}
}
