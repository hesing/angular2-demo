import {Component, View} from "angular2/angular2";
import {todoService} from "./todoService";

@Component({
	selector: 'todo-input'
})

@View({
	template: `
		<h2> Add Todo </h2>
		<form class="form-inline" (submit)="addTodo(logMe)">		
			<div class="form-group">
				<input type="text" class="form-control" #log-me />
				{{ TodoService.todos|json }}
			</div>
			<button type="button" class="btn btn-default">Add</button>
		</form>
	`
})

export class TodoInput{
	constructor(public TodoService:todoService){
		
	}

	addTodo(input){
		this.TodoService.addTodo(input.value);
		input.value = '';
		input.focus();
		console.log(this.TodoService.todos);
	}
}