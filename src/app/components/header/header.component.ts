import { Component } from '@angular/core';
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
  constructor(private userService: UserServiceService) {
    this.userService.IsUserSignedUp.subscribe((user: boolean) => {
      this.IsUserSignedUp = user;
    })
    this.userService.IsUserLoggedIn.subscribe((user: boolean) => {
      this.IsUserLoggedIn = user;
    })

  }
}
