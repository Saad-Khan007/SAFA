import { ComponentFixture, TestBed, fakeAsync, flush, tick } from '@angular/core/testing';

import { AddProductComponent } from './add-product.component';
import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductComponent],
      imports: [
        HttpClientModule,
        ReactiveFormsModule
      ]
    });
    fixture = TestBed.createComponent(AddProductComponent);
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

  it('should call addProduct and reset form on successful submission', fakeAsync(() => {
    spyOn(component['productService'], 'addProduct').and.returnValue(of(new HttpResponse()) as any);
    spyOn(component.form, 'reset');
    spyOn(component['router'], 'navigate');

    component.form.setValue({
      Name: 'foo',
      Price: 200,
      Category: 'Category',
      Description: 'Description',
      Image: 'image'
    })
    component.submit();
    tick(3000);

    expect(component['productService'].addProduct).toHaveBeenCalled();
    expect(component.form.reset).toHaveBeenCalled();
    expect(component['router'].navigate).toHaveBeenCalledWith(['product-list']);
  }));
});
