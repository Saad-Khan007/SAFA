import { Component } from '@angular/core';
import { Order } from 'src/app/data.type';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss']
})
export class MyOrderComponent {
  orderData: Order[] | undefined;
  constructor(private productService: ProductServiceService) { }
  ngOnInit() {
    this.getOrderList()
  }
  cancelOrder(orderId: number | undefined) {
    orderId && this.productService.cancelOrder(orderId).subscribe((order) => {
      this.getOrderList()
    })
  }
  getOrderList() {
    this.productService.orderList().subscribe((order) => {
      this.orderData = order;
    });
  }
}
