import {Component, View} from "angular2/angular2";

@Component({
	selector: 'todo-input'
})

@View({
	template: `
		<h2> Add Todo </h2>
		<form class="form-inline" (submit)="addTodo(logMe)">		
			<div class="form-group">
				<input type="text" class="form-control" #log-me />
			</div>
			<button type="submit" class="btn btn-default">Add</button>
		</form>
	`
})

export class TodoInput{
	addTodo(input){
		console.log("clicked", input.value);
		input.value = '';
		input.focus();
	}
}