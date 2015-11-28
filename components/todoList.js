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
var todoService_1 = require("./todoService");
var TodoList = (function () {
    function TodoList(TodoService) {
        this.TodoService = TodoService;
    }
    TodoList = __decorate([
        angular2_1.Component({
            selector: 'todo-list'
        }),
        angular2_1.View({
            template: "\n\t\t<h2>Todo List</h2>\n\t\t<ul class=\"list-group\">\n\t\t\t<li class=\"list-group-item\" *ng-for=\"#todo of TodoService.todos\">\n\t\t\t\t{{ todo }}\n\t\t\t</li>\n\t\t</ul>\n\t"
        }), 
        __metadata('design:paramtypes', [todoService_1.todoService])
    ], TodoList);
    return TodoList;
})();
exports.TodoList = TodoList;
//# sourceMappingURL=todoList.js.map