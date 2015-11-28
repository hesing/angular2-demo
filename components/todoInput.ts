import {Component, View, FORM_DIRECTIVES} from "angular2/angular2";
import {todoService} from "./todoService";

@Component({
	selector: 'todo-input'
})

@View({
	directives: [FORM_DIRECTIVES],
	template: `
		<h2> Add Todo </h2>
		<form class="form-inline" (ng-submit)="addTodo()">		
			<div class="form-group">
				<input type="text" class="form-control" [(ng-model)]="todoModel" />
				{{ todoModel }}
			</div>
			<button type="submit" class="btn btn-default">Add</button>
		</form>
	`
})

export class TodoInput{
	todoModel;
	constructor(public TodoService:todoService){
		
	}

	addTodo(){
		console.log(this.todoModel);
		this.TodoService.addTodo(this.todoModel);
		this.todoModel = '';
	}
}