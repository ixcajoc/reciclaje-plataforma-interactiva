import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService{
  
    constructor(
      private http: HttpClient,
      private router: Router,
  
    ) {}

  private apiUrl = environment.apiUrl;
  public nombreUser: string = '';
  public totalPunteo: number = 0;

  //

  getNombre(nombre:string){
    this.nombreUser = nombre;
  }
  getPunteo(totalPuntos:number){
    this.totalPunteo = totalPuntos;
  }

  getItems(): Observable<any>{
    // return this.http.get(`${this.apiUrl}/items`);
    return this.http.get<any>('http://localhost:4000/api/items');

  }

  getCategorias(): Observable<any>{
    // return this.http.get(`${this.apiUrl}/items`);
    return this.http.get<any>('http://localhost:4000/api/categories');

  }

  getItemByid(id:string): Observable<any>{
    return this.http.get(`http://localhost:4000/api/items/${id}/item`);
 
  }

  updateItem(id: string, itemData: any): Observable<any> {
    return this.http.put(`http://localhost:4000/api/items/${id}`, itemData);
  }

  newItem(categoryId: string, itemData: any): Observable<any> {
    return this.http.post(`http://localhost:4000/api/items/${categoryId}`, itemData, { responseType: 'text' });
  }

  deleteItem(categoryId:string,itemId:string){
    return this.http.delete(`http://localhost:4000/api/items/${categoryId}/${itemId}`);

  }
  


  

}
