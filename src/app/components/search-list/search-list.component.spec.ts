import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchListComponent } from './search-list.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('SearchListComponent', () => {
  let component: SearchListComponent;
  let fixture: ComponentFixture<SearchListComponent>;
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
      declarations: [SearchListComponent],
      imports:[HttpClientModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute }
      ]
    });
    fixture = TestBed.createComponent(SearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
