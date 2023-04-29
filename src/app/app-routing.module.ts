import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { DetailComponent } from './detail/detail.component';
import { HomelayoutComponent } from './homelayout/homelayout.component';
import { NoMatchComponent } from './no-match/no-match.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomelayoutComponent},
  { path: "login", component: LoginComponent},
  { path: "signup", component: SignUpComponent},
  { path: "orderHistory", component: OrderHistoryComponent },
  { path: "products/:id", component: DetailComponent},
  { path: "**", component: NoMatchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
