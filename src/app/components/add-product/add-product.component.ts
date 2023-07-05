import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login, Product } from 'src/app/data.type';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  form: FormGroup;
  msgSent: boolean = false;
  options: any = [
    "../../../assets/Img/Category/img-1.jpg",
    "../../../assets/Img/Category/img-1-1.jpg",
    "../../../assets/Img/Category/img-1-2.jpg",
    "../../../assets/Img/Category/img-1-3.jpg",
    "../../../assets/Img/Category/img-1-4.jpg",
    "../../../assets/Img/Category/img-2.jpg",
    "../../../assets/Img/Category/img-2-1.jpg",
    "../../../assets/Img/Category/img-2-2.jpg",
    "../../../assets/Img/Category/img-2-3.jpg",
    "../../../assets/Img/Category/img-2-4.jpg",
    "../../../assets/Img/Category/img-3.jpg",
    "../../../assets/Img/Category/img-3-1.jpg",
    "../../../assets/Img/Category/img-3-2.jpg",
    "../../../assets/Img/Category/img-3-3.jpg",
    "../../../assets/Img/Category/img-3-4.jpg",
    "../../../assets/Img/Category/img-4.jpg",
    "../../../assets/Img/Category/img-4-1-1.jpg",
    "../../../assets/Img/Category/img-4-2-2.jpg",
    "../../../assets/Img/Category/img-4-1.jpg",
    "../../../assets/Img/Category/img-4-2.jpg",
    "../../../assets/Img/Category/img-4-3.jpg",
    "../../../assets/Img/Category/img-4-4.jpg",
    "../../../assets/Img/Category/img-5.jpg",
    "../../../assets/Img/Category/img-5-1.jpg",
    "../../../assets/Img/Category/img-5-2.jpg",
    "../../../assets/Img/Category/img-5-3.jpg",
    "../../../assets/Img/Category/img-6.jpg",
    "../../../assets/Img/Category/img-6-1.jpg",
    "../../../assets/Img/Category/img-6-2.jpg",
  ];
  constructor(private formBuilder: FormBuilder, private productService: ProductServiceService, private router: Router) {
    this.form = this.formBuilder.group({
      Price: [null, [Validators.required]],
      Name: [null, [Validators.required]],
      Category: [null, [Validators.required]],
      Description: [null, [Validators.required]],
      Image: [null, [Validators.required]],
    });
  }
  submit() {
    if (this.form.valid) {
      const formData: Product = {
        name: `${this.form.value.Name}`,
        type: `${this.form.value.Category}`,
        desc: `${this.form.value.Description}`,
        img: `${this.form.value.Image}`,
        rate: this.form.value.Price,
      };
      this.productService.addProduct(formData).subscribe(res => {
        if (res) {
          this.msgSent = true;
        }
        setTimeout(() => {
          this.msgSent = false;
          this.form.reset();
          this.router.navigate(['product-list'])
        }, 3000)
      });
    }
  }
}
