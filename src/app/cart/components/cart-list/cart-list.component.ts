import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/model/product.model';
import { CommunicatorService } from 'src/app/products/services/communicator.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  productsInCart: Array<Product>;

  cartTotal: number = 0;

  constructor(
    private cartService: CartService,
    private communicatorService: CommunicatorService) { }

  ngOnInit() {
    this.productsInCart = this.cartService.getProducts();
    //this.cartTotal = this.cartService.getProductsTotal();

    this.subscription = this.communicatorService.channel$.subscribe(
      sum => (this.cartTotal += sum)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
