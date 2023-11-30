import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Nft} from 'src/app/model/nft.model';
import {User} from 'src/app/model/user.model';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

	@Input() infos!: {pseudo: string, avatar: string, nbNft: number, nbCollection: number, totalWeight: number}
	@Input() nft!: Nft


	ngOnInit() {
		console.log(this.nft)
			}

}
