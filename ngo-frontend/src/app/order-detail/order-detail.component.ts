import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonationCreateComponent } from '../donation-create/donation-create.component';

@Component({
  selector: 'order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {


  charity: string = DonationCreateComponent.donorCharity;
  name: string = DonationCreateComponent.donorName;
  date: Date = DonationCreateComponent.donorDate;
  amount: number = DonationCreateComponent.donorAmount;

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  onSubmit(){ 
    this.goToUserView();
  }

  goToUserView(){
    this.router.navigate(['user-view'])
    
  }

}
