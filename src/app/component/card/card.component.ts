import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Nft} from 'src/app/model/nft.model';
import {User} from 'src/app/model/user.model';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

	@Input() infos!: {user: User, nfts: Nft[], nbColl: number}
	@Input() nft!: Nft

	value!: number

	ngOnInit() {
		if (this.infos.nfts) {
			this.value = this.infos.nfts.reduce((accValue, nft) => {
				if (nft.values.length > 0) {
					accValue += nft.values[nft.values.length - 1].weight

				}
				return accValue
			}, 0)
		}
	}

}
