import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

  addCart(productToAdd: Product) {
    productToAdd.isAvailable = !productToAdd.isAvailable;
    this.cartService.addToCart(productToAdd);
    console.log(`${productToAdd.name} was added to the cart`);
  }

}
