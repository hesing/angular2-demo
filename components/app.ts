import {Component, View, bootstrap} from "angular2/angular2";
import {myService} from "./myService";

@Component({
	selector: 'sub-comp'
})

@View({
	template: `
		<h1>My Level: <em>{{ mySkill }}</em></h1>
		<div class="row">
			<div class="col-sm-6">
				<ul class="list-group">
			        <li class="list-group-item" *ng-for="#skill of skills">
			        	<em>{{ skill }}</em>
			        </li>
		    	</ul>
			</div>
			<div class="col-sm-6">
				<h2>Add New Skill</h2>
		    	<div class="form-group">
					<input class="form-control" #my-box (keyup.enter)="onEnter(myBox.value)">
		    	</div>
			</div>
		</div>
	`
})

class SubComponent {
	mySkill: string;

    constructor(public MyService: myService) {
		this.mySkill = "Novice";
        this.skills = MyService.skills;
    }

	onEnter(myBox) {
        this.MyService.addSkill(myBox);
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

bootstrap(MainComponent, [myService]);