import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';

@Pipe({
	name: "done", // The name is what we will use to refer to the pipe when we implement it in TaskListComponent
	pure: false //false indicates stateful pipe

})

export class DonePipe implements PipeTransform {
	transform(input: Task[], args) {
		var desiredDoneState = args[0];
		console.log("this is for done pipe", desiredDoneState);
		if(desiredDoneState === "done") {
			return input.filter((task) => {
				return task.done;
			});
		} else if (desiredDoneState === "notDone") {
			return input.filter((task) => {
				return !task.done;
			});
		} else {
			return input;
		}
	}
}
