
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donation } from '../donation';
import { RestApiService } from '../restapi.service';
import { CartService } from '../service/cart.service';
import { UserViewComponent } from '../user-view/user-view.component';


@Component({
  selector: 'app-create-donation',
  templateUrl: './donation-create.component.html',
  styleUrls: ['./donation-create.component.css']
})
export class DonationCreateComponent implements OnInit {
  
  charity:string = UserViewComponent.getField();
  
  //variables for order detail component
  static donorCharity: string; 
  static donorName: string;
  static donorDate: Date;
  static donorAmount: number;


  donation: Donation = new Donation();
  date: Date = new Date();

  constructor(private restService: RestApiService, private router:Router, private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  saveDonation(){
    this.restService.createDonation(this.donation).subscribe(data =>{
      console.log(data)
    },
    error => console.log(error)) 
  }

  saveCartToOrder(){
    var item;
    var items: Donation[] = this.cartService.getItems();
    for (item in items){
      this.saveDonation();
    }
  }

  saveDonorDetails(){
    DonationCreateComponent.donorCharity = this.donation.type;
    DonationCreateComponent.donorName = this.donation.name;
    DonationCreateComponent.donorDate = this.donation.date;
    DonationCreateComponent.donorAmount = this.donation.amount;   
  }


  goToOrderDetails(){
    this.router.navigate(['order-detail'])
    
  }

  goToCart(){
    this.router.navigate(['cart'])
    
  }

  onSubmit() {
    this.donation.type = this.charity;
    this.donation.date = this.date;
    this.saveDonation();
    this.cartService.addToCart(this.donation);
    this.goToCart();
    
  }

   getCharity(): string{
   return DonationCreateComponent.donorCharity; 
  }
  

}
