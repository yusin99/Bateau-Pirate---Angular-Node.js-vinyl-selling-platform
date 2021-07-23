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

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'allproducts',
    component: AllproduComponent,
  },
  {
    path: 'product/:id',
    component: SingleProductComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'thankyou',
    component: ThankYouComponent,
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
