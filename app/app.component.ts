import { Component } from 'angular2/core';


// annotation
// It names our HTML tag under the selector property, and lists the HTML we want to display under the template property.
// The @Component() defining our annotation is called a decorator
// The annotation part of a component is like a blueprint - it tells Angular that the class declaration you are about to write is for a component, which has a particular structure built into Angular where it expects a selector and a template at least.
@Component({
	selector: 'my-app',
	template: `
		<div class="container">
			<h1>Skeleton Angular2 App!</h1>
		<div>
	`
})

// class
// The component's class declaration holds the data and methods needed to make the template HTML functional.
export class AppComponent {

}