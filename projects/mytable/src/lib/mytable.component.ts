import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'lib-mytable',
  templateUrl: './mytable.component.html',
  styleUrls: ['./mytable.component.css']
})
export class MytableComponent implements OnInit, OnChanges {
  @Input() products: any = []
  @Output() removeById = new EventEmitter<number>();
  cols: any = []
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    changes.products.currentValue = this.products
    if (!this.cols[0]) {
      if (this.products[0]) {
        Object.keys(this.products[0]).forEach(key => {
          if (key !== 'qty' && key !== 'image') {
            this.cols.push({ header: key })
          }
        })
      }
    }
  }
  ngOnInit(): void {
  }
  clear(table: Table) {
    table.clear()
  }
  remove(id: number) {
    this.removeById.emit(id)
  }


}
