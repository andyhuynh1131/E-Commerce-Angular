import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CartService } from './../../service/Cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }

  totalProduct: number = 0

  constructor(private cartService: CartService) {
  }

  getTotal() {
    this.cartService.getProducts().subscribe(x => {
      this.totalProduct = x.length
    })
  }
  ngOnInit() {
    this.getTotal()
  }



}
