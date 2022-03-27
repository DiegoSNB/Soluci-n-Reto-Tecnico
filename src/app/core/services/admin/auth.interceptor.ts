/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token: any = '';
    if(!localStorage.getItem('token')){
     token = localStorage.getItem('t');
    }else{
      token = localStorage.getItem('token');
    }

    let  clonedRequest = req;
if(token){
  clonedRequest = req.clone({
    headers: new HttpHeaders({
          Authorization: token,
          'Content-Type': 'application/json'
        })
     });
}
//console.log(clonedRequest);
return next.handle(clonedRequest);
      }
}
