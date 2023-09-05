import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {firstValueFrom, map} from 'rxjs';
import {Environment} from 'src/app/environment/environment';
import {Nft, NftHttp} from 'src/app/model/nft.model';

@Injectable({
	providedIn: 'root'
})
export class NftService {
	baseUrl!: string
	constructor(private http: HttpClient) {
		this.baseUrl = Environment.API_URL
	}

	getByOwnerId(id: number, page: number = 1): Promise<Nft[]> {
		return firstValueFrom(this.http.get<{'hydra:member': NftHttp[]}>(this.baseUrl + 'nfts?owner.id=' + id)
			.pipe(
				map(res => {
					return res['hydra:member'].map(nftHttp => Nft.nftFromHttp(nftHttp))
				})
			))
	}
}
