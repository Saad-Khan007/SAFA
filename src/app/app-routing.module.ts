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

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SignupGuardGuard]
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'signup',
    component: SignupComponent,
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
    path: '',
    component: LoginComponent
  },
  {
    path: '**',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
