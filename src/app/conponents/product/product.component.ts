import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: any
  @Output() addTocart = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  addtoCartbyId(id: number) {
    this.addTocart.emit(id)
  }

}