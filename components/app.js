var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var myService_1 = require("./myService");
var SubComponent = (function () {
    function SubComponent(MyService) {
        this.MyService = MyService;
        this.mySkill = "Novice";
        this.skills = MyService.skills;
    }
    SubComponent.prototype.onEnter = function (myBox) {
        this.MyService.addSkill(myBox);
    };
    SubComponent = __decorate([
        angular2_1.Component({
            selector: 'sub-comp'
        }),
        angular2_1.View({
            template: "\n\t\t<h1>My Level: <em>{{ mySkill }}</em></h1>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<ul class=\"list-group\">\n\t\t\t        <li class=\"list-group-item\" *ng-for=\"#skill of skills\">\n\t\t\t        \t<em>{{ skill }}</em>\n\t\t\t        </li>\n\t\t    \t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<h2>Add New Skill</h2>\n\t\t    \t<div class=\"form-group\">\n\t\t\t\t\t<input class=\"form-control\" #my-box (keyup.enter)=\"onEnter(myBox.value)\">\n\t\t    \t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [myService_1.myService])
    ], SubComponent);
    return SubComponent;
})();
var MainComponent = (function () {
    function MainComponent() {
        this.myFramework = "Angular Awesome";
    }
    MainComponent = __decorate([
        angular2_1.Component({
            selector: 'main-comp'
        }),
        angular2_1.View({
            directives: [SubComponent],
            template: "\n\t\t<h2>I am learning {{ myFramework }}<h2>\n\t\t<sub-comp></sub-comp>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
})();
angular2_1.bootstrap(MainComponent, [myService_1.myService]);
//# sourceMappingURL=app.js.map