import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproduComponent } from './components/allprodu/allprodu.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileGuard } from './guard/profile.guard';
import { AdminComponent } from './components/admin/admin.component';
import { AdminGuard } from './guard/admin.guard';
import { AddVinylComponent } from './components/add-vinyl/add-vinyl.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [ProfileGuard],
  },
  {
    path: 'allproducts',
    component: AllproduComponent,
    canActivate: [ProfileGuard],
  },
  {
    path: 'addVinyl',
    component: AddVinylComponent,
    canActivate: [ProfileGuard],
  },
  {
    path: 'updateUser/:idClient',
    component: UpdateUserComponent,
    canActivate: [ProfileGuard],
  },
  {
    path: 'addUser',
    component: AddUserComponent,
    canActivate: [ProfileGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'product/:id',
    component: SingleProductComponent,
    canActivate: [ProfileGuard],
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [ProfileGuard],
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [ProfileGuard],
  },
  {
    path: 'thankyou',
    component: ThankYouComponent,
    canActivate: [ProfileGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },

  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ProfileGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
