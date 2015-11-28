import {Component, View, bootstrap} from "angular2/angular2";

@Component({
	selector: 'app'
})

@View({
	template: `
		<h1>I say Hello World</h1>
	`
})

class App{

}

bootstrap(App);