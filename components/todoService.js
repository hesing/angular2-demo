var todoService = (function () {
    function todoService() {
        this.todos = ["Potato", "Tomato", "mango slicing"];
    }
    todoService.prototype.addTodo = function (value) {
        this.todos.push(value);
    };
    return todoService;
})();
exports.todoService = todoService;
//# sourceMappingURL=todoService.js.map