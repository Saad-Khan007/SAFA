import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, SignUp, UserInfo } from '../data.type';
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
  userInfo: UserInfo | null = null;
  profileData(data: UserInfo) {
    this.http.get(`http://localhost:3000/user?Email=${data.Email}&Password=${data.Password}`, { observe: 'response' })
      .subscribe((result: any) => {
        this.userInfo = result.body[0];
      })
  }
  signUpUser(data: SignUp) {
    this.http.post('http://localhost:3000/user', data, { observe: 'response' })
      .subscribe((result: any) => {
        if (result && result.body) {
          const localData = {
            email: result.body.Email,
            name: result.body.Name,
            id: result.body.id,
          };
          this.profileData(result.body)
          localStorage.setItem('user', JSON.stringify(localData));
          this.IsUserSignedUp.next(true);
          this.router.navigate(['home']);
        } else {
          console.log("Error");
          this.IsLoginError.next(true);
        }
      })
  }

  logInUser(data: Login) {
    this.http.get(`http://localhost:3000/user?Email=${data.Email}&Password=${data.Password}`, { observe: 'response' })
      .subscribe((result: any) => {
        if (result && result.body && result.body.length) {
          const localData = {
            id: result.body[0].id,
            name: result.body[0].Name,
            email: result.body[0].Email,
          };
          localStorage.setItem('user', JSON.stringify(localData));
          this.IsUserLoggedIn.next(true);
          this.profileData(result.body[0])
          this.router.navigate(['home']);
        } else {
          console.log("Error");
          this.IsLoginError.next(true);
        }
      })
  }
  logOut() {
    localStorage.removeItem('user');
    this.IsUserLoggedIn.next(false);
    this.IsUserSignedUp.next(false);
    this.router.navigate(['login']);
  }

  reloadSignUp() {
    if (localStorage.getItem('user')) {
      this.IsUserSignedUp.next(true);
    }
  }
}
