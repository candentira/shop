import { Injectable } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductEnum } from '../../model/product-enum.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    let random = Math.random() * 10;
    let products: Product[] = [];
    for(let i = 0; i < random; i++) {
      let newProduct: Product = this.getProduct();
      products.push(newProduct);
    }
    return products;
  }

  getProduct(): Product {
    return new Product(this.generateRandomName(), Math.floor(Math.random() * 100), ProductEnum.Fruits, true);
  }

  private generateRandomName(): string {
    let randomNames = ["Milk", "Banana", "Orange", "Apple", "Icecream", "Potato", "Onion", "Cabbage", "Carrot", "Tomato"];
    return randomNames[Math.floor(Math.random() * 10)];
  }
}
