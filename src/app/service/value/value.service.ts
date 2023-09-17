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

	getByNftIds(ids: number[]): Promise<Value[]> {
		return firstValueFrom(this.http.get<ValueHttp[]>(this.baseUrl + 'nft_values?page=1'))
	}
}
