import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports:[
        HttpClientModule,
        ReactiveFormsModule
      ]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run successfully',fakeAsync(() => {
    component.form.setValue({
      Password: 'Pass@123',
      Email: 'password@example.com'
    })

    spyOn(component['userService'],'logInUser')
    spyOn(component,'localToRemoteCart')
    spyOn(component.form,'reset')

    component.submit();
    tick(2000);
    expect(component['userService'].logInUser).toHaveBeenCalled();
    expect(component.localToRemoteCart).toHaveBeenCalled();
    expect(component.form.reset).toHaveBeenCalled();
  }));
});
