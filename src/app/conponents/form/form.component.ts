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
  id: number = 0;
  form!: FormGroup;
  product: any = {}


  constructor(private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {
    window.scrollTo(0, 0)
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.id = Number(param.get('id'));
    });

    this.getProductByid(this.id)
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
  onSubmit() {
    if (this.id === 0) {
      this.create(this.form.value);
    } else {
      this.edit();
    }

  }
  getProductByid(id: number) {
    this.productService.getProductbyId(id).subscribe(x => {
      this.product = x
      Object.keys(this.form.controls).forEach(key => {
        this.form.controls[key].setValue(x[key])
      })
    })
  }
  // Tạo sản phẩm mới
  create(data: any) {
    this.productService.createProduct(data).subscribe(() => {
      alert('Tạo thành công !');
      this.router.navigate(['/admin']);
    },
      (err: any) => {
        console.log(err);

      })

  };
  // chỉnh sửa sản phẩm
  edit() {
    this.productService.editProduct(this.form.value).subscribe(() => {
      alert('Chỉnh sửa thành công !');
      this.router.navigate(['/admin']);
    },
      (err) => {
        console.log(err);
      }
    )
  };

}
