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
var TodoInput = (function () {
    function TodoInput() {
    }
    TodoInput.prototype.addTodo = function (input) {
        console.log("clicked", input.value);
        input.value = '';
        input.focus();
    };
    TodoInput = __decorate([
        angular2_1.Component({
            selector: 'todo-input'
        }),
        angular2_1.View({
            template: "\n\t\t<h2> Add Todo </h2>\n\t\t<form class=\"form-inline\" (submit)=\"addTodo(logMe)\">\t\t\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" #log-me />\n\t\t\t</div>\n\t\t\t<button type=\"submit\" class=\"btn btn-default\">Add</button>\n\t\t</form>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], TodoInput);
    return TodoInput;
})();
exports.TodoInput = TodoInput;
//# sourceMappingURL=TodoInput.js.map