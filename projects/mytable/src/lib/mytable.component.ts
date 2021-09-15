import { ProductService } from './../../../../src/app/service/Product.service';
import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'lib-mytable',
  templateUrl: './mytable.component.html',
  styleUrls: ['./mytable.component.css']
})
export class MytableComponent implements OnInit {
  @Input() products: any = []
  @Output() removeById = new EventEmitter<number>();
  _selectedColumns: any = [];
  cols: any = []
  optioncols: any = []
  constructor(private productSerVice: ProductService) { }
  // ngOnChanges(changes: SimpleChanges): void {
  //   // changes.products.currentValue = this.products
  //   // if (!this.cols[0]) {
  //   //   if (this.products[0]) {
  //   //     Object.keys(this.products[0]).forEach(key => {
  //   //       if (key !== 'qty' && key !== 'image') {
  //   //         this.cols.push({ header: key, field: key })
  //   //       }
  //   //     })
  //   //   }
  //   // }


  // }
  getAllProducts() {
    this.productSerVice.getProducts().subscribe((listProductbyService: any) => {
      this.products = listProductbyService
      if (listProductbyService.length > 0) {
        Object.keys(listProductbyService[0]).forEach(key => {
          if (key !== 'qty' && key !== 'image') {
            this.cols.push({ header: key, field: key })
          }
        })
      }
      this.optioncols = this.cols
    })



  };
  ngOnInit(): void {

    this._selectedColumns = this.cols;
    this.getAllProducts();
  }
  clear(table: Table) {
    table.clear()
  }
  remove(id: number) {
    this.removeById.emit(id)
  }
  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    //restore original order
    this.cols = val
  }



}
