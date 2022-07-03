import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product, products } from '../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
  routeID: number;

  constructor(private route: ActivatedRoute,
              private cardService: CartService) { 
    this.routeID = Number((route.snapshot.paramMap).get('productId'));
  }

  ngOnInit(): void {
    this.product = products.find(x=>x.id == this.routeID);
  }

  addToCart(product: Product){
    this.cardService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
