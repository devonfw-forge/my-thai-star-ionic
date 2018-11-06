import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { AuthProvider } from '../auth/auth';

@Injectable()
export class HttpRequestInterceptorProvider implements HttpInterceptor {
  constructor(private auth: AuthProvider) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    // Get the auth header from the Provider.
    const authHeader: string = this.auth.getToken();
    if (authHeader) {
      const authReq: HttpRequest<any> = req.clone({
        setHeaders: { Authorization: authHeader },
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
