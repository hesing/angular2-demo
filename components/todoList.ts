import {Component, View} from "angular2/angular2";
import {todoService} from "./todoService";
import {CamelCase} from "./camelCaseFilter";

@Component({
	selector: 'todo-list'
})

@View({
		pipes: [CamelCase],
	template: `
		<h2>Todo List</h2>
		<ul class="list-group">
			<li class="list-group-item" *ng-for="#todo of TodoService.todos">
				{{ todo | camelCase}}
			</li>
		</ul>
	`
})

export class TodoList{
	constructor(public TodoService: todoService){

	}
}
