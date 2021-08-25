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
  displayDialog: boolean = false
  displayFormEdit: boolean = false
  name: any
  price: any
  colors: any
  size: any
  id: number = 0


  constructor(private productService: ProductService, private messageService: MessageService) {

  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getProducts().subscribe((x: any) => { this.listProduct = x })
  };

  create(data: any) {
    this.productService.createProduct(data.value).toPromise()
      .then(res => {
        this.showSuccess('Thêm thành công !');
        this.showDialog();
        this.listProduct.push(res);

      })
      .catch(err => {
        console.log(err);
        this.showError('Thêm thất bại')
      })
  };

  edit(data: any) {


    const product = { ...data.value }
    product.id = this.id

    this.productService.editProduct(product).toPromise()
      .then(res => {
        this.showSuccess('Chỉnh sửa thành công');
        this.EditProductsuccess(res);
        this.showDialog();
      })
      .catch(() => {
        this.showError('Chỉnh sửa thất bại')
      })



  };

  showProducttoForm(id: number) {
    const result = this.listProduct.find((x: any) => x.id === id)
    if (result) {
      this.displayFormEdit = true;
      this.displayDialog = true;
      this.name = result.name;
      this.price = result.price;
      this.colors = result.colors;
      this.size = result.size;
      this.id = result.id
    }
  }

  remove(id: number) {
    const confirmRemove = confirm('Bạn có chắc chắn muốn xoá ?')
    if (confirmRemove) {
      this.productService.removeProduct(id).toPromise()
        .then(res => {
          this.showSuccess('Xoá thành công');
          this.removeById(res.id)
        })
        .catch(() => {
          this.showError('Xoá thất bại')
        })
    }

  };

  removeById(id: number) {
    const index = this.listProduct.findIndex((x: any) => x.id === id)
    if (index) {
      this.listProduct.splice(index, 1)
    }
  };

  EditProductsuccess(product: any) {
    let index = this.listProduct.findIndex((x: any) => x.id === product.id)
    if (index >= 0) {
      this.listProduct.splice(index, 1, product)
    }
  }

  showDialog() {
    this.displayDialog = !this.displayDialog
    this.displayFormEdit = false
    this.name = ''
    this.price = ''
    this.colors = ''
    this.size = ''
  };

  showSuccess(mess: string) {
    this.messageService.add({ key: 'success', severity: 'success', detail: mess });
  };

  showError(mess: string) {
    this.messageService.add({ key: 'error', severity: 'error', detail: mess });
  }

}
