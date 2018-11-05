import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/Product';
import { ProductEnum } from '../../common/ProductEnum';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [{
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

  constructor() { }

  ngOnInit() {
  }

}
