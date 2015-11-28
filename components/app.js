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
var SubComponent = (function () {
    function SubComponent() {
        this.mySkill = "Intermediate";
    }
    SubComponent = __decorate([
        angular2_1.Component({
            selector: 'sub-comp'
        }),
        angular2_1.View({
            template: "\n\t\t<p>My Level: <em>{{ mySkill }}</em><p>\n\t"
        }), 
        __metadata('design:paramtypes', [])
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
angular2_1.bootstrap(MainComponent);
//# sourceMappingURL=app.js.map