import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUp } from 'src/app/data.type';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  form: FormGroup;
  msgSent: boolean = false;
  constructor(private formBuilder: FormBuilder, private userService: UserServiceService) {
    this.form = this.formBuilder.group({
      Name: [null, [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      Password: [null, [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=~`[\]{}|\\:;"'<>,.?/]).{8,}$/)]],
      Email: [null, [Validators.required, Validators.email]],
    });
  }
  submit() {
    if (this.form.valid) {
      const formData: SignUp = {
        Name: `${this.form.value.Name}`,
        Password: `${this.form.value.Password}`,
        Email: `${this.form.value.Email}`
      };
      this.userService.signUpUser(formData)
      this.form.reset();
    }
  }

}
