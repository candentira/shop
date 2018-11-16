import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/model/product.model';
import { CommunicatorService } from 'src/app/products/services/communicator.service';
import { Subscription } from 'rxjs';
import { CartItem, CartItem } from 'src/app/model/cart-item.model';
import { ProductService } from 'src/app/products/services/product.service';

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
  }

  increaseProductQuantity(cartItem: CartItem) {
    if (this.isProductInStock(cartItem)) {
      this.productService.buyProduct(cartItem.product);
      this.cartService.addToCart(cartItem.product);
    }
  }

  isProductInStock(cartItem: CartItem) {
    return this.productService.isProductInStock(cartItem.product);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
