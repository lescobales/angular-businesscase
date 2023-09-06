import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Nft} from 'src/app/model/nft.model';
import {User} from 'src/app/model/user.model';
import {CollectionService} from 'src/app/service/collection/collection.service';
import {NftService} from 'src/app/service/nft/nft.service';
import {UserService} from 'src/app/service/user/user.service';
import { ValueService } from 'src/app/service/value/value.service';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
	infos$: BehaviorSubject<Array<{
		user: User,
		nfts: Nft[],
		nbColl: number,
		value: number
	}>> = new BehaviorSubject<Array<{
		user: User,
		nfts: Nft[],
		nbColl: number,
		value: number
	}>>([])


	constructor(private userService: UserService,
		private nftService: NftService,
		private collectionService: CollectionService,
		private valueService: ValueService) {

	}

	ngOnInit() {

		this.userService.getAll()
		this.userService.users$.subscribe(async users => {

			const infos = []
			for (const user of users) {
				const nfts = await this.nftService.getByOwnerId(user.id)
				let ids: number[] = nfts.map(nft => +nft.id)
				const coll = await this.collectionService.getByNftsId(ids)
				const value = await this.valueService.getCollectionValueByNftIds(ids)
				infos.push({user, nfts, nbColl: coll['hydra:totalItems'], value})

			}
			this.infos$.next(infos)

		})

	}


}
