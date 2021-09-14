import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
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
