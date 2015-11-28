import {Pipe} from "angular2/angular2";

@Pipe({
	name: 'camelCase'
})

export class CamelCase{
	transform(value, [field]){
		return value[0].toUpperCase() + value.slice(1).toLowerCase();
	}
}