import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../data.type';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient, private router: Router) {
  }
  addProduct(data: Product) {
    return this.http.post('http://localhost:3000/product', data, { observe: 'response' })
  }
  productList() {
    return this.http.get<Product[]>('http://localhost:3000/product')
  }
  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/product/${id}`)
  }
  getProduct(id: string) {
    return this.http.get<Product>(`http://localhost:3000/product/${id}`)
  }
  updateProduct(product: Product) {
    return this.http.put<Product>(`http://localhost:3000/product/${product.id}`, product)
  }
}
