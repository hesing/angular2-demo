import {Component, View, bootstrap} from "angular2/angular2";
import {ContactList} from './contact-list/contact-list';

@Component({
	selector: 'app'
})

@View({
	directives: [ContactList],
	template: `
		<h1>I say Hello World</h1>
		<contact-list></contact-list>
	`
})

class App{

}

bootstrap(App);