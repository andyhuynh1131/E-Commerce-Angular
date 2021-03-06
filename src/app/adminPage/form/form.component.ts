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
  url: any = []
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
        name: ['', [Validators.required, Validators.pattern('^([a-zA-Z\u00C0-\u024F\u1E00-\u1EFF\\s0-9])+$')]],
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
      this.create();
    } else {
      this.edit();
    }
  }

  getProductByid(id: number): void {
    this.productService.getProductbyId(id).subscribe(x => {
      this.product = x
      Object.keys(this.form.controls).forEach(key => {
        if (key !== 'image') {
          this.form.controls[key].setValue(x[key])
        } else if (x[key]) {
          this.url = this.url.concat(x[key])
        }
      })
    }, () => {
      this.router.navigate(['/form'])
    })
  }

  create(): void {

    const newProduct = { ...this.form.value }
    newProduct.image = newProduct.image.replace('C:\\fakepath', '"../../../assets/images/')
    this.productService.createProduct(newProduct).subscribe(() => {
      this.displayDialog = true;
    },
      (err: any) => {
        console.log(err);
      })

  };

  edit(): void {
    const newProduct = { ...this.form.value }
    newProduct.id = this.id
    this.productService.editProduct(newProduct).subscribe(() => {
      this.displayDialog = true;
    },
      (err) => {
        console.log(err);
      }
    )
  };
  backToAdminpage(): void {
    if (this.isChangeDataForm()) {
      const conFirmLog = confirm('M???i d??? li???u v???n ch??a thay ?????i, b???n v???n mu???n tho??t ?')
      if (conFirmLog) {
        this.router.navigate(['/admin'])
      }
    } else {
      this.router.navigate(['/admin'])
    }
  }

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

  selectFile(e: any) {
    this.url = []
    let string = ''
    let files = e.target.files;
    if (files) {
      for (let file of files) {
        string = string.concat(`../../../assets/images/${file.name},`)
        const reader = new FileReader();
        reader.onload = () => {
          this.url.push(reader.result)
        }
        reader.readAsDataURL(file)
      }
    }
    string = string.slice(0, -1)
    this.form.value.image = string
  }

}
