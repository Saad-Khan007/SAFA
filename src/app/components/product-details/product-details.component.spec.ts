import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let activatedRoute: ActivatedRoute;

  beforeEach(() => {
    activatedRoute = {
      snapshot: {
        paramMap: {
          get: (param: string) => {
          }
        }
      }
    } as unknown as ActivatedRoute;

    TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent],
      imports:[HttpClientModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute }
      ]
    });
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
