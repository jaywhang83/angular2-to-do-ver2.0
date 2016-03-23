import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';

@Pipe({
	name: "category", // The name is what we will use to refer to the pipe when we implement it in TaskListComponent
	pure: false //false indicates stateful pipe

})

export class CategoryPipe implements PipeTransform {
	transform(input: Task[], args) {

		var desiredCategoryState = args[0];

		if(desiredCategoryState === "work") {
			return input.filter((task) => {
				return (task.category === "work");
			});
		} else if (desiredCategoryState === "home") {
			return input.filter((task) => {
				return (task.category === "home");
			});

	}
}
}
