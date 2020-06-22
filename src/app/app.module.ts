import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componenets/shared/header/header.component';
import { FooterComponent } from './componenets/shared/footer/footer.component';
import { NavComponent } from './componenets/shared/nav/nav.component';
import { ShoppingCartComponent } from './componenets/shopping-cart/shopping-cart.component';
import { ProductListComponent } from './componenets/shopping-cart/product-list/product-list.component';
import { CartComponent } from './componenets/shopping-cart/cart/cart.component';
import { FiltersComponent } from './componenets/shopping-cart/filters/filters.component';
import { CartItemComponent } from './componenets/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './componenets/shopping-cart/product-list/product-item/product-item.component';
import { LoginComponent } from './componenets/login/login.component';
import { RegisterComponent } from './componenets/register/register.component';
import { PageNotFoundComponent } from './componenets/shared/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    ProductListComponent,
    CartComponent,
    FiltersComponent,
    CartItemComponent,
    ProductItemComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
