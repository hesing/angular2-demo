import {Component, View} from "angular2/angular2";

@Component({
	selector: 'todo-input'
})

@View({
	template: `
		<h2> Add Todo </h2>
		<input type="text" class="form-control" />
	`
})

export class TodoInput{

}