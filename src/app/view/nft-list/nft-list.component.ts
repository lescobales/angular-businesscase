import {Component, OnInit} from '@angular/core';
import {Nft} from 'src/app/model/nft.model';
import {NftService} from 'src/app/service/nft/nft.service';

@Component({
	selector: 'app-nft-list',
	templateUrl: './nft-list.component.html',
	styleUrls: ['./nft-list.component.scss']
})
export class NftListComponent implements OnInit {
	nfts!: Nft[]
	constructor(private nftService: NftService) {

	}

	ngOnInit() {
		this.nftService.getByOwnerId(1)
			.then(res => this.nfts = res)
	}
}
