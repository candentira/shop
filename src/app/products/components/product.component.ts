import { Component, OnInit } from '@angular/core';
import { Product } from '../common/Product';
import { ProductEnum } from '../common/ProductEnum';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product: Product;

  constructor() { }

  ngOnInit() {
  }

  onBuyClick(product: Product) {
    console.log(product.name);
  }

}
