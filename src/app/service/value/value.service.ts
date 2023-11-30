import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {firstValueFrom, map} from 'rxjs';
import {Environment} from 'src/app/environment/environment';
import {Value, ValueHttp} from 'src/app/model/value.model';

@Injectable({
	providedIn: 'root'
})
export class ValueService {

	baseUrl!: string
	constructor(private http: HttpClient) {
		this.baseUrl = Environment.API_URL
	}

	getAll(): Promise<Value[]> {
		return firstValueFrom(this.http.get<{'hydra:member': ValueHttp[]}>(this.baseUrl + 'nft_values?page=1&order[createdAt]=desc')
			.pipe(
				map(res => res['hydra:member'].map(valueHttp => Value.valueFromHttp(valueHttp)))
			))
	}
	getCollectionValueByNftIds(ids: number[]): Promise<number>{
		let urlEnd: string = ''
		for (let id of ids) {
			urlEnd = 'nft.id[]=' + id + '&' + urlEnd
		}
		urlEnd = urlEnd.substring(0, urlEnd.length - 1)
		return firstValueFrom(this.http.get<{'hydra:member':ValueHttp[]}>(this.baseUrl + 'nft_values?page=1' + urlEnd)
			.pipe(
				map(res => res['hydra:member'].map(valueHttp => Value.valueFromHttp(valueHttp))
					.reduce((accValue, value) => {
					accValue += value.weight
					return parseFloat(accValue.toFixed(2))
				}, 0))
			))
	}
}
