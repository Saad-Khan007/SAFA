import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  form: FormGroup;
  msgSent: boolean = false;
  date: any;
  time: any;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      Name: [null, [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      Email: [null, [Validators.required, Validators.email]],
      Message: [null, Validators.required]
    });
  }
  submit() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyr4j7OqZYuh7jMkCR6rDZ7DRP5IbWNBU8cTvmMlWYuJHuqKscswTZrHay2UosRln8t/exec';
    this.getTime();
    const formData = new FormData();
    formData.append('Name', this.form.value.Name);
    formData.append('Email', this.form.value.Email);
    formData.append('Message', this.form.value.Message);
    formData.append('Date', this.date);
    formData.append('Time', this.time);
    formData.append('Location', 'Contact');

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => {
        this.msgSent = true;
        setTimeout(() => { this.msgSent = false }, 3000)
        this.form.reset();
      })
      .catch(error => {
        console.error('Failed to send a message', error);
        this.form.reset();
      });
  }
  getTime() {
    // Get current date and time
    const currentDate = new Date();
    this.date = currentDate.toLocaleDateString();
    this.time = currentDate.toLocaleTimeString();

  }

}
