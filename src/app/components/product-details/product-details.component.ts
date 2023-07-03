import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/data.type';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  product: undefined | Product;
  quantity: number = 1;
  constructor(private route: ActivatedRoute, private productService: ProductServiceService) { }
  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('productId'));
    if (id <= 19) {
      id && this.productService.getPopularProduct(id).subscribe((data) => {
        console.log(data);
        this.product = data;
      })
    }else if(id > 19){
      id && this.productService.getProduct(id).subscribe((data) => {
        console.log(data);
        this.product = data;
      })
    }
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
