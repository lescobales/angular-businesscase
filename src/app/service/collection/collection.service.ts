import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {firstValueFrom} from 'rxjs';
import {Environment} from 'src/app/environment/environment';

@Injectable({
	providedIn: 'root'
})
export class CollectionService {

	baseUrl!: string
	constructor(private http: HttpClient) {
		this.baseUrl = Environment.API_URL
	}

	getByNftsId(ids: number[]): Promise<any> {

		let urlEnd: string = ''
		for (let id of ids) {
			urlEnd = 'nfts.id[]=' + id + '&' + urlEnd
		}
		urlEnd = urlEnd.substring(0, urlEnd.length - 1)
		return firstValueFrom(this.http.get(this.baseUrl + 'nft_collections?' + urlEnd))
	}
}
