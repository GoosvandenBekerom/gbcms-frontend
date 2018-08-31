import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {AUTHORIZATION_TOKEN_PREFIX} from '../constants';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = AuthService.getLoggedInToken();

    if (token) {
      req = req.clone({setHeaders: { Authorization: AUTHORIZATION_TOKEN_PREFIX + token }});
    }

    return next.handle(req);
  }
}
