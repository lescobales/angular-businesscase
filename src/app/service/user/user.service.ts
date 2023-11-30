import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, firstValueFrom, map} from 'rxjs';
import {Environment} from 'src/app/environment/environment';
import {User, UserHttp} from 'src/app/model/user.model';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	baseUrl: string
	usersSubject$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([])
	users$ = this.usersSubject$.asObservable()
	constructor(private http: HttpClient) {
		this.baseUrl = Environment.API_URL
	}
	getAll(page: number = 1): Promise<void> {
		return firstValueFrom(this.http.get<any>(this.baseUrl + 'users?page=' + page)
			.pipe(
				map(res => {

					this.usersSubject$.next(res['hydra:member'])
				})

			))
	}

	getUserGlobalInfo(offset: number = 0, limit: number =10):Promise<Array<{nbNft: number, nbCollection: number, pseudo: string, avatar:string, totalWeight: number}>>{
		return firstValueFrom(this.http.get<Array<{nbNft: number, nbCollection: number, pseudo: string, avatar:string,  totalWeight: number}>>(this.baseUrl + 'user_info?limit=' + limit + '&offset=' + offset))
	}

}
