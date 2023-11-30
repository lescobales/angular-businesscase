import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.token
    //Pour Api Plateform ce sera Bearer au lieu de Authorization
    const toHandle = request.clone({
      headers: new HttpHeaders({
        'Bearer': token,
        'Access-Control-Allow-Methods': 'GET'
      })
    })
    return next.handle(toHandle);
  }
}
