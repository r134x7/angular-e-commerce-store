import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomelayoutComponent } from './homelayout/homelayout.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { NoMatchComponent } from './no-match/no-match.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SuccessComponent } from './success/success.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OrderHistoryUserDetailComponent } from './order-history-user-detail/order-history-user-detail.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    HomelayoutComponent,
    CategoryMenuComponent,
    ProductListComponent,
    CartComponent,
    DetailComponent,
    LoginComponent,
    NoMatchComponent,
    OrderHistoryComponent,
    SignUpComponent,
    SuccessComponent,
    CartItemsComponent,
    HomePageComponent,
    OrderHistoryUserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
