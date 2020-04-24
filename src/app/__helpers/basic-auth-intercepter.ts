import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import {AmplifyService} from 'aws-amplify-angular';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
  constructor( private amplifyService: AmplifyService ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authState = this.amplifyService.auth();
    if (authState && authState.user) {
      request = request.clone({
        withCredentials: true,
        setHeaders: {
          Authorization: `Bearer ${authState.user.signInUserSession.idToken.jwtToken}`
        }
      });
    }

    return next.handle(request);
  }
}
