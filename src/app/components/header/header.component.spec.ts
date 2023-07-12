import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SidebarModule } from 'primeng/sidebar';
import { HeaderComponent } from './header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        HttpClientModule,
        SidebarModule,
        FormsModule
      ]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set searchList to undefined', fakeAsync(() => {
    component.hideSearch();
    tick(500);

    expect(component.searchList).toBe(undefined);
  }));

  it('should set searchInput and navigate', () => {
    spyOn(component['router'], 'navigate');

    component.submitSearch('1');

    expect(component.searchInput).toEqual('1');
    expect(component['router'].navigate).toHaveBeenCalledWith(['search/1']);
  });

  it('should call userService.logOut and productService.cartData', () => {
    spyOn(component['productService'].cartData, 'emit');
    spyOn(component['userService'], 'logOut');

    component.logOut();

    expect(component['productService'].cartData.emit).toHaveBeenCalled();
    expect(component['userService'].logOut).toHaveBeenCalled();
  });
});
