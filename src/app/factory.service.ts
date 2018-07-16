import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Product } from '../app/app.interface';
import { Response } from '@angular/http';
import {  map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FactoryService {

  constructor(private http: HttpClient) { }
  getProduct() : Observable<any> {
      return this.http.get('assets/product.json'); 
    }
}
