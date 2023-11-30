import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
	placeholder: string = 'Search by nft name'
	onKeyUpPress(e: Event){
		console.log(e)
	}

}
