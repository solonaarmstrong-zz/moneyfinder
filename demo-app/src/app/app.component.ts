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
	title: string;
	author: string;
	data: any;
	custom: any;
	filtered: any;

	constructor(private http:Http) {
		this.title = 'UI Web Developer Programming Test';
		this.author = 'Solona';
		this.custom = {
    		content: []
    	};
		this.http.get('assets/list-data.json')
		.subscribe(res => this.data = res.json());
	}

	addItem(value) {
		if (value !== '') {
			this.data.content.push({
				data: value,
				type: "text",
				display: false
			});
		}
	}

	addCustomItem(value) {
		if (value !== '') {
			this.custom.content.push({
				data: value,
				type: "text",
				display: false
			});
		}
	}

	filterItems(e) {
		if (e.srcElement.checked) {
			for (var x = 0; x < this.data.content.length; x++) {
				if (this.data.content[x].display === true) {
					this.filtered.push({
						data: this.data.content[x].data
					});
				}
			}
		} else {
			
		}
	}
}