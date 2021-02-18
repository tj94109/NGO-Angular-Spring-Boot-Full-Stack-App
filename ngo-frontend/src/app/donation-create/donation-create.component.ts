
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donation } from '../donation';
import { RestApiService } from '../restapi.service';
import { UserViewComponent } from '../user-view/user-view.component';


@Component({
  selector: 'app-create-donation',
  templateUrl: './donation-create.component.html',
  styleUrls: ['./donation-create.component.css']
})
export class DonationCreateComponent implements OnInit {
  
  charity:string = UserViewComponent.getField();
  
  static donorCharity: string; 
  static donorName: string;
  static donorDate: Date;
  static donorAmount: number;


  donation: Donation = new Donation();

  constructor(private restService: RestApiService, private router:Router) {
  }

  ngOnInit(): void {
  }

  saveDonation(){
    this.restService.createDonation(this.donation).subscribe(data =>{
      console.log(data)
    },
    error => console.log(error))

    DonationCreateComponent.donorCharity = this.donation.type;
    DonationCreateComponent.donorName = this.donation.name;
    DonationCreateComponent.donorDate = this.donation.date;
    DonationCreateComponent.donorAmount = this.donation.amount;
    
    this.goToOrderDetails();

  }

  goToOrderDetails(){
    this.router.navigate(['order-detail'])
    
  }

  onSubmit() {
    console.log(this.donation + "SUBMIT")
    this.donation.type = this.charity;
    this.saveDonation();
    
  }

   getCharity(): string{
   return DonationCreateComponent.donorCharity; 
  }
  

}
