import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../Models/login';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient: HttpClient) { }
  ///user login
  logIn(email : string, password: string): Observable<any> {
    return this.httpclient
      .post<Login>(`${environment.AppUrl}/auth/login`,
        { email, password });
  }

}
