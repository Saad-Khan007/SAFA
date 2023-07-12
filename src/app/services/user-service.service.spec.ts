import { TestBed } from '@angular/core/testing';

import { UserServiceService } from './user-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('UserServiceService', () => {
  let service: UserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(UserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
