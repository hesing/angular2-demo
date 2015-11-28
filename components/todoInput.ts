import {Component, View} from "angular2/angular2";

@Component({
	selector: 'todo-input'
})

@View({
	template: `
		<h2> Add Todo </h2>
		<form class="form-inline">		
			<div class="form-group">
				<input type="text" class="form-control" #log-me />
			</div>
			<button type="button" class="btn btn-default" (click)="addTodo($event, logMe)">Add</button>
		</form>
	`
})

export class TodoInput{
	addTodo(e,input){
		console.log(e, input.value);
		input.value = '';
		input.focus();
	}
}