import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';

@Pipe({
	name: "priority", // The name is what we will use to refer to the pipe when we implement it in TaskListComponent
	pure: false //false indicates stateful pipe

})

export class PriorityPipe implements PipeTransform {
	transform(input: Task[], args) {

		var desiredPriorityState = args[0];
    
		if(desiredPriorityState === "high") {
			return input.filter((task) => {
				return (task.priority === "high");
			});
		} else if (desiredPriorityState === "medium") {
			return input.filter((task) => {
				return (task.priority === "medium");
			});
		} else if (desiredPriorityState === "low") {
			return input.filter((task) => {
				return (task.priority === "low");
			});
	}
}
}
