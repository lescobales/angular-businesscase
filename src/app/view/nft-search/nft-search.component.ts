import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Nft} from 'src/app/model/nft.model';
import {NftService} from 'src/app/service/nft/nft.service';

@Component({
	selector: 'app-nft-search',
	templateUrl: './nft-search.component.html',
	styleUrls: ['./nft-search.component.scss']
})
export class NftSearchComponent implements OnInit {

	constructor(private nftService: NftService) {

	}

	ngOnInit() {
	}
}
