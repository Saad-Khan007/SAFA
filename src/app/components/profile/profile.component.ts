import { Component } from '@angular/core';
import { UserInfo } from 'src/app/data.type';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user: UserInfo = {
    id: 0,
    Name: '',
    Password: '',
    Email: ''
  }
  data: any;
  constructor(private userService: UserServiceService) { }
  ngOnInit() {
    this.data = this.userService.userInfo
    this.user = {
      id: this.data.id,
      Name: this.data.Name,
      Password: this.data.Password,
      Email: this.data.Email
    }
  }
}
