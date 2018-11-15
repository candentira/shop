import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsInCart: Array<Product> = [];

  constructor() { }

  addToCart(product: Product) {
    this.productsInCart.push(product);
  }

  getProducts(): Array<Product> {
    return this.productsInCart;
  }
}
