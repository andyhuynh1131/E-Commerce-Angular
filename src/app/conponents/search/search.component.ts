import { CartService } from './../../service/Cart.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from './../../service/Product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  listProduct: any = []
  listResult: any = []
  name: string = ''
  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) {

  }
  ngOnInit() {
    window.scrollTo(0, 0)
    this.getProductsbyService();
    this.getProductByParam();


  }
  getProductByParam() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.name = String(param.get('name'))
    });
  }
  getProductsbyService(): void {
    this.productService.getProducts().subscribe(listProduct => {
      this.listProduct = listProduct
      this.showResult();
    })
  }
  showResult() {
    this.listResult = this.listProduct.filter((product: any) => product.name.includes(this.name))
  }

  addToCartById(id: number) {
    const result = this.listResult.find((product: any) => product.id === id)
    this.cartService.addToCart(result)
  }
}
