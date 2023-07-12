import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
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
      declarations: [HomeComponent],
      imports:[
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute }
      ]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should popular_Id to 1', () => {
    component.popFunc(1);
    
    expect(component.popular_Id).toBe(1);
  });

  it('should popular_Id to 1', () => {
    component.popular_Id = 2
    component.popArrowFunc('prev','popular');

    expect(component.popular_Id).toBe(1);
  });

  it('should popular_Id to 1', () => {
    component.popular_Id = 2
    component.popArrowFunc('next','popular');

    expect(component.popular_Id).toBe(3);
  });
});
