import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { DonationCreateComponent } from './donation-create/donation-create.component';
import { DonationManagementComponent } from './donation-management/donation-management.component';
import { UserViewComponent } from './user-view/user-view.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { AuthGuardService } from './service/auth-guard.service';


const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"logout",component:LogoutComponent,canActivate:[AuthGuardService]},
  {path:"user-view",component:UserViewComponent,canActivate:[AuthGuardService]},
  {path:"user-create",component:UserCreateComponent,canActivate:[AuthGuardService]},
  {path:"user-management",component:UserManagementComponent,canActivate:[AuthGuardService]},
  {path:"user-update/:id",component:UserUpdateComponent,canActivate:[AuthGuardService]},
  {path:"donation",component:DonationCreateComponent,canActivate:[AuthGuardService]},
  {path:"donation-management",component:DonationManagementComponent,canActivate:[AuthGuardService]},
  {path:"order-detail",component:OrderDetailComponent,canActivate:[AuthGuardService]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


