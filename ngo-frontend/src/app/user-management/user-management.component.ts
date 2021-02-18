import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../restapi.service';
import { User } from '../user';

@Component({
  selector: 'user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  users: User[];

  constructor(private restApiService:RestApiService, private router: Router) {

   }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.restApiService.getUserList().subscribe(data => {
      this.users = data;
    })
  }

  onClickAddUser(){
    this.router.navigate(['user-create'])
  }

  onClickEditUser(id: number){
    this.router.navigate(['user-update', id])
  }

  onClickDeleteUser(id: number){
    this.restApiService.deleteUser(id).subscribe(data => {
      console.log(data)
      this.getUsers() ;
    })
  }

}
