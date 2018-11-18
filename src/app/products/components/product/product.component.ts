import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { StoreItem } from 'src/app/model/store-item.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() storeItem: StoreItem;

  @Output()
  complete: EventEmitter<StoreItem> = new EventEmitter<StoreItem>();

  constructor() { }

  ngOnInit() {
  }

  addCart(storeItem: StoreItem) {
    this.complete.emit(storeItem);
  }

}
