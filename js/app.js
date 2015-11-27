var SubComponent = ng.
	Component({
		selector: "sub-comp"
	})
	.View({
		template: 'My Level: <em>{{skill}}</em>'
	})
	.Class({
		constructor: function(){
			this.skill = "Expert";
		}
	});

var FirstComponent = ng.
	Component({
		selector: "first-comp"
	})
	.View({
		directives: [SubComponent],
		template: 'I am learning {{myFramework}} <br> <sub-comp></sub-comp>'
	})
	.Class({
		constructor: function(){
			this.myFramework = "Angular 2";
		}
	});

	ng.bootstrap(FirstComponent);