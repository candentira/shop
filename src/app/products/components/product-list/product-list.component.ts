import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/products/services/product.service';
import { CartService } from 'src/app/cart/services/cart.service';
import { CommunicatorService } from '../../services/communicator.service';
import { StoreItem } from 'src/app/model/store-item.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  store: Array<StoreItem>

  constructor(
    private productService: ProductService, 
    private cartService: CartService,
    private communicatorService: CommunicatorService) { }

  ngOnInit() {
    this.store = this.productService.getStore();
  }

  addToCart(storeItem: StoreItem) {
    if (this.productService.isProductInStock(storeItem.product)) {
      this.productService.buyProduct(storeItem.product);
      this.cartService.addToCart(storeItem.product);
      this.communicatorService.addProductToCart(storeItem.product.price);
      console.log(`${storeItem.product.name} was added to the cart`);
    }
  }
}
