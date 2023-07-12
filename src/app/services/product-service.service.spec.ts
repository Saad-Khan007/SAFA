import { TestBed } from '@angular/core/testing';

import { ProductServiceService } from './product-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProductServiceService', () => {
  let service: ProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(ProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
