/// <reference path="typings/angular2/angular2.d.ts" />
import {
	Component,
	NgFor,
	View,
	bootstrap,
} from "angular2/angular2";
@Component({
	selector: 'hola-mundo'
})
@View({
	directives: [NgFor],
	template: `
	<ul>
		<li *ng-for="#nombre of nombres">Hola {{ nombre }}</li>
	</ul>
	`
})
class HolaMundo {
	nombres: Array<string>;
	constructor() {
		this.nombres = ['Javier', 'Merche', 'Octavio', 'Palet Express'];
	}
}
bootstrap(HolaMundo);