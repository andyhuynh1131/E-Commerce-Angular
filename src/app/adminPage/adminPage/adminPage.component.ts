import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/Product.service';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-adminPage',
  templateUrl: './adminPage.component.html',
  styleUrls: ['./adminPage.component.css'],
  providers: [MessageService]
})
export class AdminPageComponent implements OnInit {
  listProduct: any = []
  cols: any = []
  displayDialog: boolean = false
  displayFormEdit: boolean = false
  idCurrent: number = 0
  constructor(private productService: ProductService, private messageService: MessageService) {
  }

  ngOnInit() {
    window.scrollTo(0, 0)
    this.getAllProducts();
  }
  getAllProducts() {
    this.productService.getProducts().subscribe((listProductbyServic: any) => {
      this.listProduct = listProductbyServic
      if (listProductbyServic.length > 0) {
        Object.keys(listProductbyServic[0]).forEach(key => {
          if (key !== 'qty' && key !== 'image') {
            this.cols.push({ header: key })
          }
        })
      }
    })
  };
  remove(id: number) {
    this.productService.removeProduct(id).subscribe(() => {
      this.showSuccess('Xoá thành công');
      this.removeSuccess();
      this.displayDialog = false;
    }, () => {
      this.showError('Xoá thất bại')
      this.displayDialog = false;
    })
  };
  removeSuccess() {
    this.productService.getProducts().subscribe(listProductbyServic => this.listProduct = listProductbyServic)
  };
  showSuccess(mess: string) {
    this.messageService.add({ key: 'success', severity: 'success', detail: mess });
  };
  showError(mess: string) {
    this.messageService.add({ key: 'error', severity: 'error', detail: mess });
  };
  showDialog(id: number): void {
    this.idCurrent = id
    this.displayDialog = true;
  }

  clear(table: Table) {
    table.clear();
  }


}
