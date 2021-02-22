import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Donation } from '../donation';
import { DonationCreateComponent } from '../donation-create/donation-create.component';
import { CartService } from '../service/cart.service';

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


  constructor(private router: Router, private cartService :CartService) { }

  items: Donation[] = this.cartService.getItems();


  ngOnInit(): void {
  }

  onSubmit(){ 
    this.goHome();
    this.cartService.clearCart();
  }

  goHome(){
    this.router.navigate(['home'])
    
  }

  getCartItems(){
    return this.cartService.getItems;
  }

}
