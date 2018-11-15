import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productsInCart: Array<Product>

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.productsInCart = this.cartService.getProducts();
  }

}
