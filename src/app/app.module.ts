import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './pages/accounts/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/accounts/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/accounts/signup-page/signup-page.component';
import { PetPageComponent } from './pages/accounts/pet-page/pet-page.component';
import { ProductPageComponent } from './pages/store/product-page/product-page.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SignupPageComponent,
    PetPageComponent,
    ProductPageComponent,
    CartPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
