import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth/auth.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	date: Date = new Date()
	token$!: Observable<string>
		
		constructor(private authService: AuthService,
			private router: Router){}

		ngOnInit(){
			this.token$ = this.authService.token$
			
		}
	onClickLogout(){
		this.authService.logout()
		this.router.navigateByUrl('/login')
	}
}
