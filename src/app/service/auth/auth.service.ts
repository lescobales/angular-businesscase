import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from 'src/app/environment/environment';
import { BehaviorSubject, firstValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private baseUrl: string
private tokenSubject$ = new BehaviorSubject<string>('')
token$ = this.tokenSubject$.asObservable()
  constructor(private http: HttpClient) {
	  this.baseUrl = Environment.API_URL

  }

	get token(): string{
		return this.tokenSubject$.value
	}

	login(credentials: {username: string, password: string}): Promise<void>{
		return firstValueFrom(
			this.http
			.post<{token: string}>(this.baseUrl + 'api/login_check', credentials)
			.pipe(
				map(response => this.tokenSubject$.next(response.token))

		)	
	)
	}

	logout(){
		this.tokenSubject$.next('')
	}
}
