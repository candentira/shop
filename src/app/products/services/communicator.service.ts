import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {

  private channelTotal = new Subject<number>();

  public channelTotal$ = this.channelTotal.asObservable();

  addProductToCart(price: number) {
    this.channelTotal.next(price);
  }
}
