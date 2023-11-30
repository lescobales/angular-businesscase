import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Nft} from 'src/app/model/nft.model';
import {NftService} from 'src/app/service/nft/nft.service';

@Component({
	selector: 'app-nft-list',
	templateUrl: './nft-list.component.html',
	styleUrls: ['./nft-list.component.scss']
})
export class NftListComponent implements OnInit {
	nfts!: Nft[]
	constructor(private nftService: NftService,
		private route: ActivatedRoute) {

	}

	ngOnInit() {
		const pseudo = this.route.snapshot.paramMap.get('pseudo')
		if(pseudo){
		this.nftService.getByOwnerPseudo(pseudo)
			.then(res => this.nfts = res)

		}
	}
}
