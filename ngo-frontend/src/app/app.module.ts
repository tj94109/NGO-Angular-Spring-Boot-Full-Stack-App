import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestApiService } from './restapi.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DonationManagementComponent } from './donation-management/donation-management.component';
import { DonationCreateComponent } from './donation-create/donation-create.component';
import { UserViewComponent } from './user-view/user-view.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DonationManagementComponent,
    DonationCreateComponent,
    UserViewComponent,
    OrderDetailComponent,
    UserManagementComponent,
    UserCreateComponent,
    UserUpdateComponent,
    LogoutComponent,
    HeaderComponent,
    CartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
