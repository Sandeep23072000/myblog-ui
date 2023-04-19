import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  domain = 'localhost:5000'
  baseUrl: string = 'http://' + this.domain;
  apiUrl: string = this.baseUrl + '/api';
  httpOptions: any;
  constructor(private http: HttpClient) { }

  getAPI(url: any): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(this.apiUrl + url);
  }

  postMultiPartAPI(url: any, params: any): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({})
    };
    return this.http.post(this.apiUrl + url, params, this.httpOptions);
  }

  postAPI(url: any, params: any): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this.apiUrl + url, params, this.httpOptions);
  }

  patchAPI(url: any, params: any): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.patch(this.apiUrl + url, params, this.httpOptions);
  }

  deleteAPI(url: any): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.delete(this.apiUrl + url, this.httpOptions);
  }
}
