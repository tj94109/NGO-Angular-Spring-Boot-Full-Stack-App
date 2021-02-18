import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DonationCreateComponent } from './donation-create/donation-create.component';
import { DonationManagementComponent } from './donation-management/donation-management.component';
import { UserViewComponent } from './user-view/user-view.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"user-view",component:UserViewComponent},
  {path:"user-create",component:UserCreateComponent},
  {path:"user-management",component:UserManagementComponent},
  {path:"user-update/:id",component:UserUpdateComponent},
  {path:"login",component:LoginComponent},
  {path:"donation",component:DonationCreateComponent},
  {path:"donation-management",component:DonationManagementComponent},
  {path:"order-detail",component:OrderDetailComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


