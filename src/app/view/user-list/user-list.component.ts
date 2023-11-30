import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {UserService} from 'src/app/service/user/user.service';


@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
	infos$: BehaviorSubject<Array<{
		pseudo: string,
		avatar: string,
		nbNft: number,
		nbCollection: number,
		totalWeight: number
	}>> = new BehaviorSubject<Array<{
		pseudo: string,
		avatar: string,
		nbNft: number,
		nbCollection: number,
		totalWeight: number
	}>>([])
	offset: number = 1;
	pages: number  = 10;


	constructor(private userService: UserService,
		private router: Router) {

	}

	ngOnInit() {
		this.getUserInfo((this.offset - 1) * 10, this.pages);

		//this.userService.getAll()
		//this.userService.users$.subscribe(async users => {

		//	const infos = []
		//	for (const user of users) {
		//		const nfts = await this.nftService.getByOwnerId(user.id)
		//		let ids: number[] = nfts.map(nft => +nft.id)
		//		const coll = await this.collectionService.getByNftsId(ids)
		//		const value = await this.valueService.getCollectionValueByNftIds(ids)
		//		infos.push({user, nfts, nbColl: coll['hydra:totalItems'], value})
//
//			}
//			this.infos$.next(infos)
//
//		})

	}

	getUserInfo(offset: number, limit: number){
		this.userService.getUserGlobalInfo(offset,limit)
			.then(res => {
				this.infos$.next(res)
			})
	}

	onPageClick(offset: number){
		this.offset = offset;
		this.getUserInfo((offset - 1) * 10, this.pages);

	}

	onUserClick(pseudo: string, nbCollection: number){
		if(nbCollection)
			this.router.navigateByUrl(pseudo + '/collection-list')
		else
			this.router.navigateByUrl(pseudo + '/nft-list')
	}


}
