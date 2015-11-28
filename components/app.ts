import {Component, View, bootstrap} from "angular2/angular2";

@Component({
	selector: 'sub-comp'
})

@View({
	template: `
		<p>My Level: <em>{{ mySkill }}</em><p>
	`
})

class SubComponent {
	mySkill: string;

	constructor() {
		this.mySkill = "Intermediate";
	}
}


@Component({
	selector: 'main-comp'
})

@View({
	directives: [SubComponent],
	template: `
		<h2>I am learning {{ myFramework }}<h2>
		<sub-comp></sub-comp>
	`
})

class MainComponent{
	myFramework: string;

	constructor(){
		this.myFramework = "Angular Awesome";
	}
}

bootstrap(MainComponent);