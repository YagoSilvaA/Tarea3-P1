import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private http: HttpClient
  ) { }
  getMenu(){
    return this.http.get<any>('http://localhost:3000/menu');
  }
}
