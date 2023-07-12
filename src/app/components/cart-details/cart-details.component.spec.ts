import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDetailsComponent } from './cart-details.component';
import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';

describe('CartDetailsComponent', () => {
  let component: CartDetailsComponent;
  let fixture: ComponentFixture<CartDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartDetailsComponent],
      imports: [HttpClientModule]
    });
    fixture = TestBed.createComponent(CartDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getCurrentCart', () => {
    spyOn(component, 'getCurrentCart')
    spyOn(component['productService'], 'removeToCart').and.returnValue(of(new HttpResponse()) as any);;
    component.cartData = [1] as any;
    component.removeToCart(1);

    expect(component.getCurrentCart).toHaveBeenCalled();
  });

  it('should assign all values in getCurrentCart', () => {
    const rate = [
      { rate: 1, quantity: 1 }
    ]
    spyOn(component['productService'], 'currentCart').and.returnValue(of(rate) as any);

    component.getCurrentCart();

    expect(component.cartData).toBe(rate as any);
    expect(component.summary.total).toBe(13.09);
    expect(component.summary.tax).toBe(0.1);
    expect(component.summary.price).toBe(1);
    expect(component.summary.discount).toBe(0.01);
    expect(component.summary.delivery).toBe(12);
  });

  it('should navigate to /', () => {
    const rate:any= []
    spyOn(component['productService'], 'currentCart').and.returnValue(of(rate) as any);
    spyOn(component['router'], 'navigate')

    component.getCurrentCart();

    expect(component.cartData).toEqual([]);
    expect(component['router'].navigate).toHaveBeenCalledWith(['/']);
  });
});
