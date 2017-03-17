import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<h1>{{title}}</h1>
		<app-radio-group
			[groupName]="'beerStyles'"
			[selectedItem]="this.state.selectedType"
			[onChange]="this.onTypeChange"
			[items]="this.getBeerPropValues('type')"
		></app-radio-group>
		<app-radio-group
			[groupName]="'beerCountries'"
			[selectedItem]="this.state.selectedCountry"
			[onChange]="this.onCountryChange"
			[items]="this.getBeerPropValues('country')"
		></app-radio-group>
		<app-list [items]="this.getBeers()"></app-list>
	`,
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'ngBeerMenu';

	state = {
		beers: [
			{name: 'Brooklyn Lager', type: 'Lager', country: 'USA'},
			{name: 'Delerium Tremens', type: 'IPA', country: 'Belgium'},
			{name: 'Sound Wave', type: 'IPA', country: 'England'},
			{name: 'Broken Dream', type: 'Stout', country: 'England'}
		],
		selectedType: 'All',
		selectedCountry: 'All'
	}

	getBeers = () => this.state.beers
						.filter(beer => beer.type === this.state.selectedType || this.state.selectedType === 'All')
						.filter(beer => beer.country === this.state.selectedCountry || this.state.selectedCountry === 'All')
						.map(beer => beer.name)

	getBeerPropValues = (propName) => ['All'].concat(Array.from(new Set(this.state.beers.map(beer => beer[propName]))))

	onTypeChange = (type) => {
		this.state.selectedType = type;
	}

	onCountryChange = (country) => {
		this.state.selectedCountry = country;
	}
}
