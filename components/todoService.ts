export class todoService{
	todos:any[] = ["Potato", "Tomato", "mango slicing"];
	addTodo(value){
		this.todos.push(value);
	}
}