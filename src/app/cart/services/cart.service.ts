import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item.model';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/products/services/product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsInCart: Array<CartItem> = [];

  constructor(private productService: ProductService) { }

  addToCart(product: Product) {
    let isProductInCart = this.isProductInCart(product);
    if (isProductInCart) {
      isProductInCart.quantity++;
    } else {
      this.productsInCart.push(new CartItem(product, 1));
    }
  }

  removeFromCart(product: Product) {
    let productInCart = this.isProductInCart(product);
    if (productInCart) {
      if (productInCart.quantity > 1) {
        productInCart.quantity--;
      } else {
        this.productsInCart.splice(this.productsInCart.findIndex(p => p.product == product), 1);
      }
    }
  }

  private isProductInCart(product: Product) {
    return this.productsInCart.find(cartItem => cartItem.product == product);
  }

  getCart(): Array<CartItem> {
    return this.productsInCart;
  }

  getTotalPrice(): number {
    return this.productsInCart.reduce((acc, item) => acc + item.product.price, 0);
  }

  getItemsAmount(): number {
    return this.productsInCart.length;
  }
}
