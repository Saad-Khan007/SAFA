import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/data.type';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  date: any;
  time: any;
  constructor(private formBuilder: FormBuilder, private userService: UserServiceService) {
    this.form = this.formBuilder.group({
      Password: [null, [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=~`[\]{}|\\:;"'<>,.?/]).{8,}$/)]],
      Email: [null, [Validators.required, Validators.email]],
    });
  }
  submit() {
    if (this.form.valid) {
      const formData: Login = {
        Email: `${this.form.value.Email}`,
        Password: `${this.form.value.Password}`,
      };
      this.userService.logInUser(formData);
      this.form.reset();
    }
  }
}
