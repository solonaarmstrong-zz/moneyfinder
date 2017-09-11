import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [
		'./app.component.css']
})
export class AppComponent {
	title = 'UI Web Developer Programming Test';
	author = 'Solona';
	data;
	constructor(private http:Http) {
		this.http.get('assets/list-data.json')
		.subscribe(res => this.data = res.json());
	}
}