import {Component, View, bootstrap} from "angular2/angular2";
import {TodoInput} from "./TodoInput";

@Component({
	selector: 'app'
})

@View({
	directives: [TodoInput],
	template: `
		<h1>I say Hello World</h1>
		<todo-input></todo-input>
	`
})

class App{

}

bootstrap(App);