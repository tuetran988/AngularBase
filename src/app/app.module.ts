import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersProfileComponent } from './components/users-profile/users-profile.component';
import { PagesLoginComponent } from './components/pages-login/pages-login.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PagesRegisterComponent } from './components/pages-register/pages-register.component';
import { PagesErrorComponent } from './components/pages-error/pages-error.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderService } from './order.service';
import { HttpClientModule } from '@angular/common/http';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersProfileComponent,
    PagesLoginComponent,
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    PagesRegisterComponent,
    PagesErrorComponent,
    OrdersComponent,
    OrderDetailsComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],

  providers: [OrderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
