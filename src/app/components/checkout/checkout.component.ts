import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart, Order, SignUp } from 'src/app/data.type';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  form: FormGroup;
  msgSent: boolean = false;
  total: number | undefined;
  cartData: Cart[] | undefined;

  constructor(private formBuilder: FormBuilder, private productService: ProductServiceService, private router: Router) {
    this.form = this.formBuilder.group({
      Address: [null, [Validators.required]],
      Contact: [null, [Validators.required]],
      Email: [null, [Validators.required, Validators.email]],
    });
  }
  ngOnInit() {
    this.productService.currentCart().subscribe((data) => {
      this.cartData = data;
      let price = 0;
      data.forEach((item) => {
        price += item.rate * (item.quantity as number);
      })
      this.total = price + (price / 10) + 12 - (price / 100);
    })
  }
  submit() {
    if (this.form.valid) {
      let user = localStorage.getItem('user');
      let userId = user && JSON.parse(user).id;
      if (this.total) {
        const formData: Order = {
          Address: `${this.form.value.Address}`,
          Contact: `${this.form.value.Contact}`,
          Email: `${this.form.value.Email}`,
          Total: this.total,
          UserId: userId
        };
        this.cartData?.forEach((cart) => {
          setTimeout(() => {
            cart.id && this.productService.deleteCartItems(cart.id)
          }, 1000);
        })
        this.productService.orderNow(formData).subscribe((data) => {
          if (data) {
            this.form.reset();
            this.msgSent = true;
            setTimeout(() => {
              this.msgSent = false;
              this.router.navigate(['order']);
            }, 2000);
          }
        });
      }
    }
  }
}
