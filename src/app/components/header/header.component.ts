import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  sidebarVisible: boolean = false;
  userDropdown: boolean = false;
  IsUserSignedUp: boolean = false;
  IsUserLoggedIn: boolean = false;
  // IsLogInSignUp: boolean = false;
  constructor(private userService: UserServiceService, private router: Router) {
    this.userService.IsUserSignedUp.subscribe((user: boolean) => {
      this.IsUserSignedUp = user;
    })
    this.userService.IsUserLoggedIn.subscribe((user: boolean) => {
      this.IsUserLoggedIn = user;
    })
  }
  // ngOnInit(): void {
  //   this.router.events.subscribe((event: any) => {
  //     if (event.url) {
  //       if (localStorage.getItem("user") && (event.url.includes('login') || event.url.includes('signup'))) { 
  //         console.warn("Signup or login Success")
  //         this.IsLogInSignUp = true;
  //       }else{
  //         console.warn("Signup or login Failure")
  //         this.IsLogInSignUp = false;
  //       }
  //     }
  //   })
  // }
  logOut(){
    this.userService.logOut();
  }
}
