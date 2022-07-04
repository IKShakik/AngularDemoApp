import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  items: Product[] = [];

  constructor(private _http: HttpClient) { }

  addToCart(product: Product){
    this.items.push(product);
  console.log(this.items);
  }

  getItems(){
  console.log(this.items);
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this._http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
