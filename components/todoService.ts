export class todoService{
	todos:any[] = [];
	addTodo(value){
		this.todos.push(value);
	}
}