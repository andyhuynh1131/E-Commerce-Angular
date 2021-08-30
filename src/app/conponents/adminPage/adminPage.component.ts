import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/Product.service';
import { MessageService } from 'primeng/api';

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
  constructor(private productService: ProductService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.getAllProducts();
  }
  //Lấy tất cả sản phẩm 
  getAllProducts() {
    this.productService.getProducts().subscribe((x: any) => {
      this.listProduct = x
      if (x.length > 0) {
        Object.keys(x[0]).forEach(key => {
          if (key !== 'qty' && key !== 'image') {
            this.cols.push({ header: key })
          }
        })
      }
    })
  };
  //xoá sản phẩm 
  remove(id: number) {
    const confirmRemove = confirm('Bạn có chắc chắn muốn xoá ?')
    if (confirmRemove) {
      this.productService.removeProduct(id).subscribe(res => {
        this.showSuccess('Xoá thành công');
        this.removeById(res.id);
      }, () => {
        this.showError('Xoá thất bại')
      })
    }
  };
  // Xoá sản phẩm trên giao diện khi thành công
  removeById(id: number) {
    const index = this.listProduct.findIndex((x: any) => x.id === id)
    if (index) {
      this.listProduct.splice(index, 1)
    }
  };
  // Toast thành công
  showSuccess(mess: string) {
    this.messageService.add({ key: 'success', severity: 'success', detail: mess });
  };
  // Toast thất bại
  showError(mess: string) {
    this.messageService.add({ key: 'error', severity: 'error', detail: mess });
  };



}
