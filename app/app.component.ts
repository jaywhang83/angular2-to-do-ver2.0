import { Component } from 'angular2/core';


// annotation
// It names our HTML tag under the selector property, and lists the HTML we want to display under the template property.
// The @Component() defining our annotation is called a decorator
// The annotation part of a component is like a blueprint - it tells Angular that the class declaration you are about to write is for a component, which has a particular structure built into Angular where it expects a selector and a template at least.
// *ngFor is an Angular directive, it's a special keyword that you can use as an attribute in your HTML. *ngFor creates a for each loop in your template when we say: <h3 *ngFor="#task of tasks">{{ task.description }}</h3> 

//The *ngFor directive will duplicate the HTML element it is bound to once for each element in the specified array - in our case tasks. If there are any HTML elements nested inside the element with the *ngFor attribute, then the entire block is copied.


// (click)="taskWasSelected(task)" is an output binding
@Component({
	selector: 'my-app',
	template: `
		<div class="container">
			<h1>To-Do List</h1>
			<h3 *ngFor="#task of tasks" (click)="taskWasSelected(task)">
				{{ task.description }}
			</h3>
		<div>
	`
})

// class
// The component's class declaration holds the data and methods needed to make the template HTML functional.

export class AppComponent { //Controller class definition
	public tasks: Task[];
	constructor(){
		this.tasks = [
			new Task("Create To-Do List app.", 0),
			new Task("Learn Kung Fu.", 1),
			new Task("Rewatch all the Lord of the Rings movies.", 2),
			new Task("Do the laundry.", 3)
		];
	}

	taskWasSelected(clickedTask: Task): void {
		console.log(clickedTask);
	}
}

export class Task {
	public done: boolean = false; // done property will have default value of false
	constructor(public description: string, public id: number){}
}