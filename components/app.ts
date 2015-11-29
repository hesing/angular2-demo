import {Component, View, bootstrap} from "angular2/angular2";

@Component({
	selector: 'app'
})

@View({
	template: `
		<h1>I say Hello World</h1>
		<div class="form-group">
		    <label class="col-md-4 control-label">Select Letter</label>
		    <div class="col-md-8">
		        <select class="form-control" [(ng-model)]="selectedLetter">
		        	<option *ng-for="#letter of letters">{{ letter }}</option>
		        </select>
			</div>
		</div>
	`
})

export class App{
	letters:string[] = ['c', 'a', 'e', 'f', 'ok', 'not ok'];
	selectedLetter: string = 'ok';
}

bootstrap(App);