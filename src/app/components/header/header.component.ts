import { query } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/data.type';
import { ProductServiceService } from 'src/app/services/product-service.service';
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
  searchList: undefined | Product[];
  cartItems: number = 0;
  searchInput: string | undefined;
  constructor(private userService: UserServiceService, private router: Router, private productService: ProductServiceService) {
    this.userService.IsUserSignedUp.subscribe((user: boolean) => {
      this.IsUserSignedUp = user;
    })
    this.userService.IsUserLoggedIn.subscribe((user: boolean) => {
      this.IsUserLoggedIn = user;
    })
  }
  hideSearch() {
    setTimeout(() => {
      this.searchList = undefined;
    },500)
  }
  submitSearch(value: string) {
    this.searchInput = value;
    this.router.navigate([`search/${value}`])
  }
  searchProduct(event: KeyboardEvent) {
    if (event) {
      const element = event.target as HTMLInputElement
      this.productService.searchList(element.value).subscribe((data) => {
        if (data.length >= 5) {
          data.length = 5
        }
        this.searchList = data;
      })
    }
  }
  ngOnInit(): void {
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      this.cartItems = JSON.parse(cartData).length;
    }
    this.productService.cartData.subscribe(data => {
      this.cartItems = data.length;
    })
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user).id;
    if (user && userId) {
      this.productService.getCartList(userId);
    }
  }
  logOut() {
    this.userService.logOut();
    this.productService.cartData.emit([])
  }
}
