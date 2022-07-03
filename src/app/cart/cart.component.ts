import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: any = this.cartService.getItems;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
