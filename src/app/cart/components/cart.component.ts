import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../model/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() product: Product

  constructor() { }

  ngOnInit() {
  }

}
