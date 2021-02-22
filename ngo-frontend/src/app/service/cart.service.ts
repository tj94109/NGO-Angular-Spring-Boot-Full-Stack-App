import { Injectable } from '@angular/core';
import { RestApiService } from '../restapi.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  total:number;

  constructor(private restService: RestApiService) { }

  addToCart(donation) {
    this.items.push(donation);
    this.total = this.total + donation.amount;
  }

  getItems() {
    return this.items;
  }


  clearCart() {
    this.items = [];
    return this.items;
  }

  getTotalofItems(){
    return this.total; 
  }
  





}
