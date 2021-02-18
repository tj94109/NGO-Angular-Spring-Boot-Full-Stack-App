import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonationCreateComponent } from '../donation-create/donation-create.component';

@Component({
  selector: 'user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  
  charities: any[] = [
    {"id": 1, "name": "Bake Sale"},
    {"id": 2, "name": "Dog Rescue"},
    {"id": 3, "name": "Fundraiser"},
    {"id": 4, "name": "Marathon"}];
  
  static fieldName: string;

  constructor(private router: Router) { 
  
  } 

  ngOnInit(): void {
  }

  onClick(value) {
    UserViewComponent.fieldName = value;
    this.router.navigateByUrl("donation");
    console.log(UserViewComponent.fieldName + "FieldName"); 
  }

  static getField(): string {
    return this.fieldName;
  }


}
