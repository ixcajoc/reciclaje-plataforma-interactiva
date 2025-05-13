import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService{

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router,

  ) {}

  getItems(): Observable<any>{
    // return this.http.get(`${this.apiUrl}/items`);
    return this.http.get('http://localhost:4000/api/items');

  }

}
