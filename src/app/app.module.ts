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
import { NgrxHomePageComponent } from './ngrx-home-page/ngrx-home-page.component';
import { NgrxHomeLayoutComponent } from './ngrx-home-layout/ngrx-home-layout.component';
import { NgrxCategoryMenuComponent } from './ngrx-category-menu/ngrx-category-menu.component';
import { NgrxProductListComponent } from './ngrx-product-list/ngrx-product-list.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductListEffects } from './product-list.effects';
import { productsReducer } from './product-list.reducer';

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
    OrderHistoryUserDetailComponent,
    NgrxHomePageComponent,
    NgrxHomeLayoutComponent,
    NgrxCategoryMenuComponent,
    NgrxProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ product: productsReducer }, {}),
    EffectsModule.forRoot([ProductListEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
