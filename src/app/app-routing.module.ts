import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SignupGuardGuard } from './guards/signup-guard.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UpdateProductListComponent } from './components/update-product-list/update-product-list.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MyOrderComponent } from './components/my-order/my-order.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [SignupGuardGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [SignupGuardGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'add-product',
    component: AddProductComponent,
  },
  {
    path: 'product-list',
    component: ProductListComponent,
  },
  {
    path: 'update-product-list/:id',
    component: UpdateProductListComponent,
  },
  {
    path: 'search/:query',
    component: SearchListComponent,
  },
  {
    path: 'product-detail/:productId',
    component: ProductDetailsComponent,
  },
  {
    path: 'cart-detail',
    component: CartDetailsComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'order',
    component: MyOrderComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
