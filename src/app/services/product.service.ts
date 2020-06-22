import { Injectable } from '@angular/core';
import {Product} from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {productsUrl} from 'src/app/config/api';


const apiUrl = "http://localhost:3000/products";
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //TODO: populate products from an api
  products: Product[]=[
    new Product(1,'Product 1','This is product 1 description,This prduct is really good.',100),
    new Product(2,'Product 2','This is product 2 description,This prduct is really good.',150),
    new Product(3,'Product 3','This is product 3 description,This prduct is really good.',250),
    new Product(4,'Product 4','This is product 4 escription,This prduct is really good.',350),
    new Product(5,'Product 6','This is product 5 description,This prduct is really good.',450),
    new Product(6,'Product 6','This is product 6 description,This prduct is really good.',600)
  ]

  constructor(private http:HttpClient) { }

  // getProducts():Product[]{
  //   //TODO: Populate products from an API and return an Obserable.
  //   return this.products;
  // }

  getProducts():Observable<Product[]>{
    //TODO: Populate products from an API and return an Obserable.
    return this.http.get<Product[]>(productsUrl);
  }
}
