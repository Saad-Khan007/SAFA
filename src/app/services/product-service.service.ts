import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Cart, Product } from '../data.type';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  cartData = new EventEmitter<Product[] | []>();
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
  getProduct(id: number) {
    return this.http.get<Product>(`http://localhost:3000/product/${id}`)
  }
  getPopularProduct(id: number) {
    return this.http.get<Product>(`http://localhost:3000/popularFeatured/${id}`)
  }
  updateProduct(product: Product) {
    return this.http.put<Product>(`http://localhost:3000/product/${product.id}`, product)
  }
  searchList(query: string) {
    return this.http.get<Product[]>(`http://localhost:3000/popularFeatured?q=${query}`)
  }
  localAddToCart(data: Product) {
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
    if (!localCart) {
      localStorage.setItem('localCart', JSON.stringify([data]));
      this.cartData.emit([data]);
    } else {
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart', JSON.stringify(cartData));
      this.cartData.emit(cartData);
    }
  }
  localRemoveToCart(id: number | undefined) {
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      let items: Product[] = JSON.parse(cartData);
      items = items.filter(item => item.id !== id);
      localStorage.setItem('localCart', JSON.stringify(items));
      this.cartData.emit(items);
    }
  }
  addToCart(cartData: Cart) {
    return this.http.post('http://localhost:3000/cart', cartData, { observe: 'response' })
  }
  removeToCart(id: number | undefined) {
    return this.http.delete('http://localhost:3000/cart/' + id)
  }
  currentCart() {
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user).id;
    return this.http.get<Cart[]>('http://localhost:3000/cart?userId=' + userId)
  }
  getCartList(id: number) {
    return this.http.get<Product[]>('http://localhost:3000/cart?userId=' + id, { observe: 'response' }).subscribe((data) => {
      if (data && data.body) {
        this.cartData.emit(data.body);
      }
    });
  }
}
