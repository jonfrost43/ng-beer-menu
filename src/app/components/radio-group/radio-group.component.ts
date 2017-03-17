import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-radio-group',
	template: `
		<form>
			<label *ngFor="let item of items">
				<input type="radio" name="{{groupName}}" value="{{item}}" [ngModel]="this.selectedItem" (ngModelChange)="this.onChange($event)" />
				{{item}}
			</label>
		</form>
	`,
	styleUrls: ['./radio-group.component.css']
})
export class RadioGroupComponent implements OnInit {
    @Input() groupName: string;
    @Input() items;
    @Input() selectedItem: string;
	@Input() onChange;

	constructor() { }

	ngOnInit() {
		console.log(this)
		if(!this.groupName){
			throw new Error('groupName input is required in radio-group component')
		}
	}

}
