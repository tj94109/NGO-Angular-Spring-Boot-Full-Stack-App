import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { INSPECT_MAX_BYTES } from 'buffer';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();

  total:number;

  
  constructor(private cartService: CartService, private router:Router) { }

  ngOnInit(): void {
  }

  findsum():number{       
    
    for(let j=0;j<this.items.length;j++){   
         this.total += this.items[j].amount  
    }
    return this.total;  
  } 

  onClickRemove(){
    this.cartService.clearCart();
    this.cartService.getItems();
    this.router.navigateByUrl('user-view');
  }

  onClickBack(){
    this.router.navigateByUrl("user-view");
  }

  onClickFinish(){
    
    this.router.navigateByUrl("order-detail");
  }

}
