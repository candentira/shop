import { Injectable } from '@angular/core';
import { Product } from '../common/Product';
import { ProductEnum } from '../common/ProductEnum';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return [{
      name: "First Product name",
      description: "First Product description",
      price: 100,
      category: ProductEnum.Diary,
      isAvailable: true
    }, {
      name: "Second Product name",
      description: "Second Product description",
      price: 100,
      category: ProductEnum.Diary,
      isAvailable: true
    }, {
      name: "Third Product name",
      description: "Third Product description",
      price: 100,
      category: ProductEnum.Diary,
      isAvailable: true
    }];
  }
}
