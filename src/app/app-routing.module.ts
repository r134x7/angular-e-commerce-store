import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full"},
  { path: "/login", component: LoginComponent},
  { path: "/signup", component: SignUpComponent},
  { path: "/orderHistory", component: OrderHistoryComponent },
  { path: "/products/:id", component: DetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
