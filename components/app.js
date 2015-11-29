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
var App = (function () {
    function App() {
        this.letters = ['c', 'a', 'e', 'f', 'ok', 'not ok'];
        this.selectedLetter = 'ok';
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            template: "\n\t\t<h1>I say Hello World</h1>\n\t\t<div class=\"form-group\">\n\t\t    <label class=\"col-md-4 control-label\">Select Letter</label>\n\t\t    <div class=\"col-md-8\">\n\t\t        <select class=\"form-control\" [(ng-model)]=\"selectedLetter\">\n\t\t        \t<option *ng-for=\"#letter of letters\">{{ letter }}</option>\n\t\t        </select>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
exports.App = App;
angular2_1.bootstrap(App);
//# sourceMappingURL=app.js.map