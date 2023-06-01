import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersProfileComponent } from './components/users-profile/users-profile.component';
import { PagesLoginComponent } from './components/pages-login/pages-login.component';
import { PagesRegisterComponent } from './components/pages-register/pages-register.component';
import { PagesErrorComponent } from './components/pages-error/pages-error.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users-profile', component: UsersProfileComponent },
  { path: 'users-login', component: PagesLoginComponent },
  { path: 'users-register', component: PagesRegisterComponent },
  { path: 'error-page', component: PagesErrorComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'orders/:id', component: OrderDetailsComponent },
  { path: '**' , pathMatch: 'full' , redirectTo:'error-page'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
