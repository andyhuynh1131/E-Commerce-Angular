import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [TranslateService]
})
export class ProductComponent implements OnInit {
  @Input() product!: any
  @Output() addTocart = new EventEmitter<number>();
  constructor() { }


  ngOnInit() {
  }

  addtoCartbyId(id: number) {
    this.addTocart.emit(id)
  }

  likeProduct() {
    this.product.like += 1
  }
}
