import { TestBed } from '@angular/core/testing';

import { SignupGuardGuard } from './signup-guard.guard';

describe('SignupGuardGuard', () => {
  let guard: SignupGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SignupGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
