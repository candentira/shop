import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/products/services/product.service';
import { CartService } from 'src/app/cart/services/cart.service';
import { CommunicatorService } from '../../services/communicator.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product>

  constructor(
    private productService: ProductService, 
    private cartService: CartService,
    private communicatorService: CommunicatorService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addToCart(productToAdd: Product) {
    productToAdd.isAvailable = !productToAdd.isAvailable;
    this.cartService.addToCart(productToAdd);
    this.communicatorService.publishData(productToAdd.price);
    console.log(`${productToAdd.name} was added to the cart`);
  }
}
