import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrderComponent } from './my-order.component';
import { HttpClientModule } from '@angular/common/http';

describe('MyOrderComponent', () => {
  let component: MyOrderComponent;
  let fixture: ComponentFixture<MyOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyOrderComponent],
      imports:[HttpClientModule]
    });
    fixture = TestBed.createComponent(MyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
