import { ShoppingCartComponent } from './componenets/shopping-cart/shopping-cart.component';
import { RegisterComponent } from './componenets/register/register.component';
import { LoginComponent } from './componenets/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './componenets/shared/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  {path: 'login',component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'shop', component: ShoppingCartComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
