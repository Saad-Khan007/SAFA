import { TestBed } from '@angular/core/testing';

import { SignupGuardGuard } from './signup-guard.guard';
import { HttpClientModule } from '@angular/common/http';

describe('SignupGuardGuard', () => {
  let guard: SignupGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    guard = TestBed.inject(SignupGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
