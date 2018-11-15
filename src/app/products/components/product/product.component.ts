import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/products/services/product.service';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  @Output()
  complete: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

  addCart(productToAdd: Product) {
    this.complete.emit(productToAdd);
  }

}
