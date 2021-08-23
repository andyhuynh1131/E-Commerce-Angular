import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';


import { CartService } from 'src/app/service/Cart.service';
import { ProductService } from './../../service/Product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  display: boolean = false
  currentImg: number = 0
  id: any = 0
  product: any = {}
  listProduct: any = []
  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) {

  }

  ngOnInit() {
    window.scrollTo(0, 0)
    this.getProductsbyService();
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.id = param.get('id')

    });


  };


  getProductsbyService(): void {
    this.productService.getProducts().subscribe(x => {
      this.listProduct = x
      const result = this.listProduct.find((x: any) => x.id == this.id);
      if (result) {
        this.product = result
      }

    })
  }


  minus() {
    if (this.product.qty > 1) {
      this.product.qty -= 1
    } else {
      alert('Số lượng lớn hơn 0')
    }
  };

  plus() {
    this.product.qty += 1
  };

  chaneQty() {
    const txtValue = <HTMLInputElement>document.getElementById('text_value');
    if (Number(txtValue.value) <= 0 || typeof this.product.qty != 'number') {
      this.product.qty = 1
      txtValue.value = '1'
      alert('Số lượng không hợp lệ')
    }
  };

  addToCart() {
    this.cartService.addToCart(this.product)
  };

  showDialog() {
    if (this.product.sizeChosen && this.product.color) {
      this.display = !this.display;
    } else {
      alert('Vui lòng chọn màu và size sản phẩm')
    }

  };

  handleClickColor(color: any) {
    this.product.color = color
    console.log(this.product.color);

  };

  handleClickSize(size: any) {
    this.product.sizeChosen = size
  };

}
