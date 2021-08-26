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
  image: any


  constructor(private productService: ProductService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.getAllProducts();
  }

  //Lấy tất cả sản phẩm 
  getAllProducts() {
    this.productService.getProducts().subscribe((x: any) => { this.listProduct = x })
  };

  // Tạo sản phẩm mới
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
  // chỉnh sửa sản phẩm
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
  //Hiển thị dữ liệu lên form khi nhấn nút edit
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
      this.image = result.image
    }
  }
  //xoá sản phẩm 
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
  // Xoá sản phẩm trên giao diện khi thành công
  removeById(id: number) {
    const index = this.listProduct.findIndex((x: any) => x.id === id)
    if (index) {
      this.listProduct.splice(index, 1)
    }
  };
  // Chỉnh sửa sản phẩm trên giao diện khi thành công
  EditProductsuccess(product: any) {
    let index = this.listProduct.findIndex((x: any) => x.id === product.id)
    if (index >= 0) {
      this.listProduct.splice(index, 1, product)
    }
  }
  //Hiển thị Form
  showDialog() {
    this.displayDialog = !this.displayDialog
    this.displayFormEdit = false
    this.name = ''
    this.price = ''
    this.colors = ''
    this.size = ''
    this.image = ''
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
