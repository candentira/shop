import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CartItem } from 'src/app/model/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cartItem: CartItem

  @Output() reduce: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() increase: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  reduceQuantity(cartItem: CartItem) {
    this.reduce.emit(cartItem);
  }

  increaseQuantity(cartItem: CartItem) {
    this.increase.emit(cartItem);
  }

}
