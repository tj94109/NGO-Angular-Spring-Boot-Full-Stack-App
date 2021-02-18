import { Component, OnInit } from '@angular/core';
import { Donation } from '../donation';
import { RestApiService } from '../restapi.service';

@Component({
  selector: 'donation-management',
  templateUrl: './donation-management.component.html',
  styleUrls: ['./donation-management.component.css']
})
export class DonationManagementComponent implements OnInit {

  donations: Donation[];

  constructor(private restApiService:RestApiService) { }

  ngOnInit(): void {
    this.getDonations();
      
  }

  getDonations(){
    this.restApiService.getDonationsList().subscribe(data => {
      this.donations = data;
    })
  }


}
