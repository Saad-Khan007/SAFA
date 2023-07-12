import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductDetailsComponent } from './user-product-details.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('UserProductDetailsComponent', () => {
  let component: UserProductDetailsComponent;
  let fixture: ComponentFixture<UserProductDetailsComponent>;
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
      declarations: [UserProductDetailsComponent],
      imports:[HttpClientModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute }
      ]
    });
    fixture = TestBed.createComponent(UserProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
