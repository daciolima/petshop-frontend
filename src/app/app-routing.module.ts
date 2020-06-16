import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/accounts/login-page/login-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { ProductPageComponent } from './pages/store/product-page/product-page.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { PetsPageComponent } from './pages/accounts/pets-page/pets-page.component';
import { ResetPasswordPageComponent } from './pages/accounts/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/accounts/signup-page/signup-page.component';


const routes: Routes = [

  // Rotas filhas de FramePageComponent. Carregam a Navbar
  {
    path: '',
    component: FramePageComponent,
    children: [
      { path: '', component: ProductPageComponent },
      { path: 'cart', component: CartPageComponent },
    ]
  },
  {
    path: 'account',
    component: FramePageComponent,
    children: [
      { path: 'pets', component: PetsPageComponent },
    ]
  },

  // Rotas não carrega o Navbar
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'reset-password', component: ResetPasswordPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
