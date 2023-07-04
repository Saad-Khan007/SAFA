import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cart, Login, Product } from 'src/app/data.type';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  date: any;
  time: any;
  constructor(private formBuilder: FormBuilder, private userService: UserServiceService,private productService: ProductServiceService) {
    this.form = this.formBuilder.group({
      Password: [null, [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=~`[\]{}|\\:;"'<>,.?/]).{8,}$/)]],
      Email: [null, [Validators.required, Validators.email]],
    });
  }
  localToRemoteCart() {
    let data = localStorage.getItem('localCart')
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user).id;
    if (data) {
      let cart: Product[] = JSON.parse(data);
      cart.forEach((product: Product,index) => {
        let cartItem: Cart = {
          ...product,
          productId: product.id as number,
          userId
        }
        delete cartItem.id;
        setTimeout(()=>{
          this.productService.addToCart(cartItem).subscribe((data) => {
            if (data) {
              console.log("Item stored in DB");
            }
          })
          if(cart.length === index+1) {
            localStorage.removeItem('localCart');
          }
        },1000)
      })
    }
    setTimeout(()=>{
      this.productService.getCartList(userId);
    },2000)
  }
  submit() {
    if (this.form.valid) {
      const formData: Login = {
        Email: `${this.form.value.Email}`,
        Password: `${this.form.value.Password}`,
      };
      this.userService.logInUser(formData);
      setTimeout(() => {
        this.localToRemoteCart()
      },1200)
      this.form.reset();
    }
  }
}
