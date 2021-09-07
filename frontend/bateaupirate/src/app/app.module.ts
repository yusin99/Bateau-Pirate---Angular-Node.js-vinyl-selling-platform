import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductModelServer } from './models/product.model';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { AllproduComponent } from './components/allprodu/allprodu.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
// import {
//   GoogleLoginProvider,
//   SocialAuthServiceConfig,
// } from 'angularx-social-login';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';
import { RegisterComponent } from './components/register/register.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminComponent } from './components/admin/admin.component';
import { AddVinylComponent } from './components/add-vinyl/add-vinyl.component';
import { AddUserComponent } from './components/add-user/add-user.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    CheckoutComponent,
    HomeComponent,
    SingleProductComponent,
    ThankYouComponent,
    AllproduComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    AdminComponent,
    AddVinylComponent,
    AddUserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    NoopAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    SocialLoginModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '478516489460-mg7or4i99mten76f5a0dibfgbkbkrrk9.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('4328588887207992'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
