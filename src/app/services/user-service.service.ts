import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, SignUp } from '../data.type';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient, private router: Router) {
    this.reloadSignUp();
  }
  IsUserLoggedIn = new BehaviorSubject<boolean>(false);
  IsUserSignedUp = new BehaviorSubject<boolean>(false);
  IsLoginError = new BehaviorSubject<boolean>(false);

  signUpUser(data: SignUp) {
    this.http.post('http://localhost:3000/user', data, { observe: 'response' })
      .subscribe((result) => {
        localStorage.setItem('user', JSON.stringify(result.body));
        this.IsUserSignedUp.next(true);
        this.router.navigate(['home']);
      })
  }

  logInUser(data: Login) {
    this.http.get(`http://localhost:3000/user?Email=${data.Email}&Password=${data.Password}`, { observe: 'response' })
      .subscribe((result: any) => {
        if (result && result.body && result.body.length) {
          console.log(result)
          console.log(result.body)
          console.log(result.body.length)
          localStorage.setItem('user', JSON.stringify(result.body));
          this.IsUserLoggedIn.next(true);
          this.router.navigate(['home']);
        } else {
          console.log("Error");
          this.IsLoginError.next(true);
        }
      })
  }

  reloadSignUp() {
    if (localStorage.getItem('user')) {
      this.IsUserSignedUp.next(true);
      this.router.navigate(['home']);
      console.log('LocalStorage reload')
    }
  }
}
