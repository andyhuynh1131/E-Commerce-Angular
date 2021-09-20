import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './total-price.component.html',
  styleUrls: ['./total-price.component.css']
})
export class LikeComponent implements OnInit, OnChanges {
  @Input() totalPrice: number = 0

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.totalPrice = changes.totalPrice.currentValue
  }

  ngOnInit() {
  }



}
