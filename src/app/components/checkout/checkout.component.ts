import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUp } from 'src/app/data.type';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  form: FormGroup;
  msgSent: boolean = false;
  date: any;
  time: any;
  constructor(private formBuilder: FormBuilder, private userService: UserServiceService) {
    this.form = this.formBuilder.group({
      Address: [null, [Validators.required]],
      Contact: [null, [Validators.required]],
      Email: [null, [Validators.required, Validators.email]],
    });
  }
  submit() {
    // if (this.form.valid) {
    //   const formData: SignUp = {
    //     Name: `${this.form.value.Name}`,
    //     Password: `${this.form.value.Password}`,
    //     Email: `${this.form.value.Email}`
    //   };
    //   this.userService.signUpUser(formData)
    //   this.form.reset();
    // }
  }
}
