import { Router } from '@angular/router';
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
  constructor(private router: Router, private productService: ProductService, private messageService: MessageService) {
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
      this.removeSuccess(id);
      this.displayDialog = false;
    }, () => {
      this.showError('Xoá thất bại')
      this.displayDialog = false;
    })
  };
  removeSuccess(id: number) {
    this.listProduct = this.listProduct.filter((val: any) => val.id !== id);
  };
  showSuccess(mess: string) {
    this.messageService.add({ key: 'success', severity: 'success', detail: mess, life: 3000 });
  };
  showError(mess: string) {
    this.messageService.add({ key: 'error', severity: 'error', detail: mess, life: 3000 });
  };
  showDialog(id: number): void {
    this.idCurrent = id
    this.displayDialog = true;
  }
  clear(table: Table) {
    table.clear();
  }
  navigate(id: number) {
    this.router.navigate([`/form/${id}`]);
  }
}
