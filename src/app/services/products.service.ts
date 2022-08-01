import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { ProductI } from '../interfaces/product.interface';

const base_url_api = environment.urlApi+'products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  search$:BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private httpClient: HttpClient) { }

  getProducts(){
    return this.httpClient.get<ProductI[]>(`${base_url_api}`,{params:{limit:50}})
  }
}
