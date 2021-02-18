import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../restapi.service';
import { User } from '../user';


@Component({
  selector: 'user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {


  user: User = new User();

  constructor(private restapi: RestApiService, private router: Router) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.restapi.createUser(this.user).subscribe(data => {
      console.log(data)
    })
    this.goToUserManagement();
  }

  goToUserManagement(){
    this.router.navigate(["user-management"])
  }

  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }


}
