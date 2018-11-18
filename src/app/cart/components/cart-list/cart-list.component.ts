import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductService } from 'src/app/products/services/product.service';
import { CommunicatorService } from 'src/app/products/services/communicator.service';
import { CartService } from '../../services/cart.service';
import { CartItem } from 'src/app/model/cart-item.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  cart: Array<CartItem>;

  cartTotal: number = 0;
  itemsInCart: number = 0;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private communicatorService: CommunicatorService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();

    this.subscription = this.communicatorService.channelTotal$.subscribe(
      sum => {
        this.cartTotal += sum;
        this.itemsInCart++;
      }
    );
  }

  reduceProductQuantity(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.product);
    this.productService.returnProduct(cartItem.product);
    this.cartTotal -= cartItem.product.price;
    this.itemsInCart--;
  }

  increaseProductQuantity(cartItem: CartItem) {
    if (this.isProductInStock(cartItem)) {
      this.productService.buyProduct(cartItem.product);
      this.cartService.addToCart(cartItem.product);
      this.cartTotal += cartItem.product.price;
      this.itemsInCart++;
    }
  }

  isProductInStock(cartItem: CartItem) {
    return this.productService.isProductInStock(cartItem.product);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
