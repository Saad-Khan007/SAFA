import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductListComponent } from './update-product-list.component';

describe('UpdateProductListComponent', () => {
  let component: UpdateProductListComponent;
  let fixture: ComponentFixture<UpdateProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateProductListComponent]
    });
    fixture = TestBed.createComponent(UpdateProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
