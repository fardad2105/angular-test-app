import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { reqLoginBody } from '../shared/data/LoginData';
import { LoginData } from '../shared/data/LoginData';
const AUTH_API = 'http://208.109.13.111:9191/api/Account/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'Login', {
      countryId: credentials.countryId,
      username: credentials.username,
      password: credentials.password,
      expiresInMinute: credentials.expiresInMinute
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}
