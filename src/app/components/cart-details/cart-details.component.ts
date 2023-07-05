import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart, Summary } from 'src/app/data.type';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent {
  cartData: Cart[] | undefined;
  summary: Summary = {
    price: 0,
    discount: 0,
    tax: 0,
    delivery: 0,
    total: 0
  };
  constructor(private productService: ProductServiceService, private router: Router) { }
  ngOnInit() {
    this.getCurrentCart();
  }
  removeToCart(id: number | undefined) {
    id && this.cartData && this.productService.removeToCart(id).subscribe((data) => {
      if (data) {
        this.getCurrentCart();
      }
    })
  }
  getCurrentCart() {
    this.productService.currentCart().subscribe((data) => {
      this.cartData = data;
      let price = 0;
      data.forEach((item) => {
        price += item.rate * (item.quantity as number);
      })
      this.summary.price = price;
      this.summary.discount = price / 100;
      this.summary.tax = price / 10;
      this.summary.delivery = 12;
      this.summary.total = price + this.summary.tax + this.summary.delivery - this.summary.discount;
      if (!this.cartData.length) {
        this.router.navigate(['/']);
      }
    })
  }
}
