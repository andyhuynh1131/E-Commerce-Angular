import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/Product.service';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [MessageService]
})
export class FormComponent implements OnInit {
  displayDialog: boolean = false
  id: number = 0;
  form!: FormGroup;
  product: any = {};
  constructor(private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    window.scrollTo(0, 0)
    this.isEdit();
    if (this.id !== 0) {
      this.getProductByid(this.id);
    }
    this.createForm();
  }
  createForm(): void {
    this.form = this.fb.group(
      {
        id: this.id,
        name: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9\\s]+$')]],
        price: ['', [Validators.pattern('^[1-9]{1}[0-9]*$'), Validators.required]],
        image: ['', Validators.required],
        colors: ['', Validators.required],
        size: ['', Validators.required],
      }
    )
  }
  isEdit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.id = Number(param.get('id'));
    });

  }
  onSubmit(): void {
    if (this.id === 0) {
      this.create(this.form.value);
    } else {
      this.edit();
    }

  }
  // Gan du lieu vao form
  getProductByid(id: number): void {
    this.productService.getProductbyId(id).subscribe(x => {
      this.product = x
      Object.keys(this.form.controls).forEach(key => {
        if (key === 'colors') {
          const listColors = x[key].map((x: any) => x.color)
          this.form.controls[key].setValue(listColors)
        } else if (key === 'size') {
          const listSizes = x[key].map((x: any) => x.size)
          this.form.controls[key].setValue(listSizes)
        } else {
          this.form.controls[key].setValue(x[key])
        }
      })
    })
  }
  // Tạo sản phẩm mới
  create(data: any): void {
    this.productService.createProduct(data).subscribe(() => {
      this.displayDialog = true;
    },
      (err: any) => {
        console.log(err);
      })

  };
  // chỉnh sửa sản phẩm
  edit(): void {
    this.productService.editProduct(this.form.value).subscribe(() => {
      this.displayDialog = true;
    },
      (err) => {
        console.log(err);
      }
    )
  };
  backToAdminpage(): void {
    if (this.isChangeDataForm()) {
      const conFirmLog = confirm('Mọi dữ liệu vẫn chưa thay đổi, bạn vẫn muốn thoát ?')
      if (conFirmLog) {
        this.router.navigate(['/admin'])
      }
    } else {
      this.router.navigate(['/admin'])
    }
  }
  // Check du lieu co thay doi khong
  isChangeDataForm(): boolean {
    if (this.form.controls.name.touched || this.form.controls.price.touched
      || this.form.controls.image.touched || this.form.controls.colors.touched
      || this.form.controls.size.touched) {
      return true;
    } else {
      return false;
    }
  }
  navigate() {
    this.router.navigate(['/admin'])
  }
}
