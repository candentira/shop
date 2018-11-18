import { Injectable } from '@angular/core';

import { Product } from '../../model/product.model';
import { StoreItem } from 'src/app/model/store-item.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  store: Array<StoreItem> = [];

  constructor() {
    let random = Math.random() * 10;
    for(let i = 0; i < random; i++) {
      this.store.push(this.generateStoreItem());
    }
  }

  getStore(): Array<StoreItem> {
    return this.store;
  }

  isProductInStock(product: Product) {
    return this.getStoreItem(product).quantityInStock >= 1;
  }

  buyProduct(product: Product) {
    this.getStoreItem(product).quantityInStock--;
  }

  returnProduct(product: Product) {
    this.getStoreItem(product).quantityInStock++;
  }

  getStoreItem(product: Product) {
    return this.store.find(storeItem => storeItem.product == product);
  }

  generateStoreItem(): StoreItem {
    return new StoreItem(new Product(this.generateRandomName(), Math.floor(Math.random() * 100)), Math.floor(Math.random() * 10));
  }

  private generateRandomName(): string {
    let randomNames = ["Milk", "Banana", "Orange", "Apple", "Icecream", "Potato", "Onion", "Cabbage", "Carrot", "Tomato"];
    return randomNames[Math.floor(Math.random() * 10)];
  }
}
