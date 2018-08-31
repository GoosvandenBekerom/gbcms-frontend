import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {API_BASE_URL, AUTHORIZATION_HEADER_KEY, AUTHORIZATION_TOKEN_PREFIX, LOCALSTORAGE_TOKEN_KEY} from '../constants';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  static getLoggedInToken() {
    return localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
  }

  login(username: string, password: string) {
    const body = new HttpParams({fromObject: {username, password}});
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    return this.http.post(`${API_BASE_URL}/login`, body.toString(), {headers: headers, observe: 'response'})
      .pipe(
        map(resp => resp.headers.get(AUTHORIZATION_HEADER_KEY).substr(AUTHORIZATION_TOKEN_PREFIX.length)),
        tap(token => localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, token))
      );
  }

  logout() {
    // Not static because there might be other things needed to be done on logout
    localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
  }
}
