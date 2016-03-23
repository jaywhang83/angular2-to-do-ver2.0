export class Task {
	public done: boolean = false; // done property will have default value of false
	constructor(public description: string, public priority: string, public category: string, public id: number){}
}
