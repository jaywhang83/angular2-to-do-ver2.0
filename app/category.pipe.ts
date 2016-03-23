import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';
import {TaskListComponent} from './task-list.component'

@Pipe({
	name: "category", // The name is what we will use to refer to the pipe when we implement it in TaskListComponent
	pure: false //false indicates stateful pipe
})

export class CategoryPipe implements PipeTransform {

	transform(input: Task[], args) {
		var desiredCategoryState = args[0][0];
		var temp = args[0][1];
		// args[1] = "home";
		// args[2] = "work";
		// args[3]= "school";
		console.log("args",temp);


		console.log("pipe", desiredCategoryState);
for(var i of temp) {

	console.log("i is: ", i);
	if(desiredCategoryState === i) {
		return input.filter((task) => {
			return (task.category === i);
		});
	}

}
	//
	// 	else if (desiredCategoryState === "work") {
	// 		return input.filter((task) => {
	// 			return (task.category === "work");
	// 		});
	 //
  //   } else if (desiredCategoryState === "school") {
 // 			return input.filter((task) => {
 // 				return (task.category === "school");
 // 			});
  //  }
}
}
