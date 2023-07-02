import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  lists: any[] = [];
  constructor(private productService: ProductServiceService, private router: Router) { }
  ngOnInit() {
    this.productList()
  }
  productList() {
    this.productService.productList().subscribe(productList => {
      this.lists = productList;
    });
  }
  updateProduct(id: number) {
    this.router.navigate([`update-product-list/${id}`]);
  }
  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(res => {
      this.productList();
    });
  }
}
