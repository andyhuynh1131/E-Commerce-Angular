import { Component, OnInit,Input,Output,EventEmitter, OnChanges } from '@angular/core';
import { ProductService } from './../../service/Product.service';
import { CartService } from './../../service/Cart.service';


@Component({
  selector: 'app-listProduct',
  templateUrl: './listProduct.component.html',
  styleUrls: ['./listProduct.component.css']
})
export class ListProductComponent implements OnInit {
 
  listProduct:any = []

  
  constructor(private productService : ProductService, private cartService:CartService) {

   }

   getProductbyService ():void{
     this.listProduct = this.productService.getProducts()
   }

  ngOnInit() {
   this.getProductbyService()

  }
 

  addToCartById(id:number){
    const result  = this.listProduct.find((x:any)=>x.id===id)
    this.cartService.addToCart(result) 
  }

}
