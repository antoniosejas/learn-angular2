/// <reference path="typings/angular2/angular2.d.ts" /> 
import {
	Component,
	View,
	bootstrap,
} from "angular2/angular2";
 
@Component({
	selector: 'hola-mundo'
})
@View({
	template: `<div>Hola {{ nombre }}</div>`
})
class HolaMundo {
	nombre: string;
	constructor() {
		this.nombre = 'Palet';
	}
}

bootstrap(HolaMundo);