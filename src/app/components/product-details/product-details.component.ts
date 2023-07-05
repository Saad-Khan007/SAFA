import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart, Product } from 'src/app/data.type';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  product: undefined | Product;
  quantity: number = 1;
  removeCart: boolean = false
  cartData: Product | undefined;
  constructor(private route: ActivatedRoute, private productService: ProductServiceService) { }
  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('productId'));
    if (id <= 19) {
      id && this.productService.getPopularProduct(id).subscribe((data) => {
        this.product = data;
      })
    } else if (id > 19) {
      id && this.productService.getProduct(id).subscribe((data) => {
        this.product = data;
      })
    }

    let cartData = localStorage.getItem('localCart');
    if (cartData && id) {
      let carts = JSON.parse(cartData);
      carts = carts.filter((item: Product) => {
        return id === item.id
      })
      if (carts.length) {
        this.removeCart = true
      } else {
        this.removeCart = false
      }
    }
    let user = localStorage.getItem('user');
    if (user) {
      let userId = user && JSON.parse(user).id;
      this.productService.getCartList(userId);
      this.productService.cartData.subscribe((cart) => {
        let item = cart.filter((item: Product) => id === item.productId);
        if (item.length) {
          this.cartData = item[0];
          this.removeCart = true;
        }
      })
    }
  }
  addToCart() {
    if (this.product) {
      this.product.quantity = this.quantity;
      if (!localStorage.getItem('user')) {
        this.productService.localAddToCart(this.product)
        this.removeCart = true
      } else {
        let user = localStorage.getItem('user');
        let userId = user && JSON.parse(user).id;
        let cartData: Cart = {
          ...this.product,
          userId,
          productId: this.product.id as number
        }
        delete cartData.id;
        this.productService.addToCart(cartData).subscribe((data) => {
          if (data) {
            this.productService.getCartList(userId);
            this.removeCart = true;
          }
        })
      }
    }
  }

  removeToCart(id: number | undefined) {
    if (!localStorage.getItem('user')) {
      if (id) {
        this.productService.localRemoveToCart(id)
      }
    } else {
      let user = localStorage.getItem('user');
      let userId = user && JSON.parse(user).id;
      this.cartData && this.productService.removeToCart(this.cartData.id).subscribe((data) => {
        if (data) {
          this.productService.getCartList(userId);
        }
      })
    }
    this.removeCart = false;
  }

  quantityFunc(val: string) {
    if (val === 'add' && this.quantity < 20) {
      this.quantity += 1;
    }
    if (val === 'add' && this.quantity === 20) {
      this.quantity = 0;
    }
    if (val === 'sub' && this.quantity <= 20) {
      this.quantity -= 1;
    }
    if (val === 'sub' && this.quantity === 0) {
      this.quantity = 20;
    }
  }
}
