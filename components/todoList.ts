import {Component, View} from "angular2/angular2";
import {todoService} from "./todoService";

@Component({
	selector: 'todo-list'
})

@View({
	template: `
		<h2>Todo List</h2>
		<ul class="list-group">
			<li class="list-group-item" *ng-for="#todo of TodoService.todos">
				{{ todo }}
			</li>
		</ul>
	`
})

export class TodoList{
	constructor(public TodoService: todoService){

	}
}
