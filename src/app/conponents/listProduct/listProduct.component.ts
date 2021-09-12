import { Component, OnInit } from '@angular/core';


import { ProductService } from './../../service/Product.service';
import { CartService } from './../../service/Cart.service';


@Component({
  selector: 'app-listProduct',
  templateUrl: './listProduct.component.html',
  styleUrls: ['./listProduct.component.css']
})
export class ListProductComponent implements OnInit {

  listProduct: any = []
  constructor(private productService: ProductService, private cartService: CartService) {

  }

  getProductsbyService(): void {
    this.productService.getProducts().subscribe(x => this.listProduct = x)
  }

  ngOnInit() {
    this.getProductsbyService()

  }
  addToCartById(id: any) {
    const result = this.listProduct.find((x: any) => x.id === id)
    this.cartService.addToCart(result)
  }

}
