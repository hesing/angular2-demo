import {Component, View, bootstrap} from "angular2/angular2";
import {TodoInput} from "./TodoInput";
import {todoService} from "./todoService";
import {TodoList} from "./todoList";

@Component({
	selector: 'app'
})

@View({
	directives: [TodoInput, TodoList],
	template: `
		<h1>I say Hello World</h1>
		<div class="row">
			<div class="col-sm-6">
				<todo-input></todo-input>
			</div>
			<div class="col-sm-6">
				<todo-list><todo-list>
			</div>
		</div>	
	`
})

class App{

}

bootstrap(App, [todoService]);