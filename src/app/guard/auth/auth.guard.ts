import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from 'src/app/service/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
	const router = inject(Router)
	if (!authService.token) {
		router.navigateByUrl('/login')
	}
	return true;
};
