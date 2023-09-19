import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //   constructor(
  //     private readonly httpClient: HttpClient
  //   ) { }

  //   getAllProduct() {
  //  return this.httpClient.get('http://localhost:8686/ProductManagement/GetProductData')  
  //   } 


  constructor(private readonly httpClient: HttpClient) { }

  getAllProduct() {

    return this.httpClient.get('http://localhost:8686/ProductManagement/GetProductData')
  }

}

