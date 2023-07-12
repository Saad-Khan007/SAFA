import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrderComponent } from './my-order.component';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('MyOrderComponent', () => {
  let component: MyOrderComponent;
  let fixture: ComponentFixture<MyOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyOrderComponent],
      imports: [HttpClientModule]
    });
    fixture = TestBed.createComponent(MyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should cancel order', () => {
    spyOn(component, 'getOrderList')
    spyOn(component['productService'], 'cancelOrder').and.returnValue(of({}) as any)
    component.cancelOrder(1);
    expect(component.getOrderList).toHaveBeenCalled();
    expect(component['productService'].cancelOrder).toHaveBeenCalled();
  });

  it('should get order list', () => {
    component.orderData = [1] as any
    spyOn(component['productService'], 'orderList').and.returnValue(of([]) as any)
    component.getOrderList();
    expect(component['productService'].orderList).toHaveBeenCalled();
    expect(component.orderData).toEqual([]);
  });
});
