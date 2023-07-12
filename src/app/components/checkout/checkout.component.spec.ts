import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { CheckoutComponent } from './checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutComponent],
      imports: [
        HttpClientModule,
        ReactiveFormsModule
      ]
    });
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be called gracefully.', () => {
    spyOn(component, 'submit')
    component.submit();
    expect(component.submit).toHaveBeenCalled();
  });

  it('should call deleteCartItems,orderNow and reset form on successful submission', fakeAsync(() => {
    spyOn(component['productService'], 'deleteCartItems');
    spyOn(component['productService'], 'orderNow').and.returnValue(of([]) as any);
    spyOn(component.form, 'reset');
    spyOn(component['router'], 'navigate');

    component.form.setValue({
      Address: 'foo',
      Contact: 1200,
      Email: 'Email@foo.com',
    })
    component.total = 10;
    component.cartData = [{ id: 1 }] as any;
    component.submit();
    tick(3000);

    expect(component['productService'].deleteCartItems).toHaveBeenCalled();
    expect(component['productService'].orderNow).toHaveBeenCalled();
    expect(component['router'].navigate).toHaveBeenCalledWith(['order']);
    expect(component.form.reset).toHaveBeenCalled();
  }));
});
