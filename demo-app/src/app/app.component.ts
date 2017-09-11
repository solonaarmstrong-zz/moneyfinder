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
	additionalItems = [];

	constructor(private http:Http) {
		this.http.get('assets/list-data.json')
		.subscribe(res => this.data = res.json());
	}

	constructor() {
		this.data = [];
	}

	addItem(value) {
		if (value !== '') {
			this.data.content.push({
				data: value
			});
		}
	}

	addCustomContent(value) {
		if (value != '') {
			this.additionalItems.push({
				data: value
			});
		}
	}
}