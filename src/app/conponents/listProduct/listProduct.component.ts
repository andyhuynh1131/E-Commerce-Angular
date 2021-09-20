import { Component, OnInit } from '@angular/core';


import { ProductService } from './../../service/Product.service';
import { CartService } from '../../service/Cart.service';



@Component({
  selector: 'app-listProduct',
  templateUrl: './listProduct.component.html',
  styleUrls: ['./listProduct.component.css']
})
export class ListProductComponent implements OnInit {
  listProduct: any = []
  listPromotion: any = []
  constructor(private productService: ProductService, private cartService: CartService) {

  }
  ngOnInit() {
    this.getProductsbyService();
    this.getProductsPromotion();
  }

  getProductsPromotion(): void {
    this.productService.getProductsPromotion().subscribe((products: any) => this.listPromotion = products
    )
  }

  getProductsbyService(): void {
    this.productService.getProducts().subscribe(listProductByService => this.listProduct = listProductByService)
  }


  addToCartById(id: any) {
    const result = this.listProduct.find((product: any) => product.id === id)
    this.cartService.addToCart(result)
  }

  likeProduct(e: any) {
    const result = this.listProduct.find((product: any) => product.id === e)
    if (result) {
      result.like += 1
    }
  }
  handleChange(e: any) {
    const arrPrice = e.target.value.split(',')
    this.productService.getProductByPrice(Number(arrPrice[0]), Number(arrPrice[1])).subscribe(x => this.listProduct = x
    )
  }


}
