import {Component, EventEmitter} from 'angular2/core';

@Component ({
	selector: 'new-category',
	outputs: ['onSubmitNewCategory'],
	template:`
		<div class="task-form">
			<h3>Create Category:</h3>
			<input placeholder="Category" class="col-sm-8 input-lg" #newCategory>
			<button (click)="addCategory(newCategory)" class="btn-success btn-lg add-button">Add</button>
		</div>
	`
})

export class NewCategoryComponent{
	public onSubmitNewCategory: EventEmitter<String>;
	constructor(){
		this.onSubmitNewCategory = new EventEmitter();
	}

	addCategory(userCategory: HTMLInputElement){
		console.log(userCategory);
		this.onSubmitNewCategory.emit(userCategory.value);
		userCategory.value = "";
	}
}
