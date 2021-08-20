import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { ProductService } from './../../service/Product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  currentImg: number = 0
  id:any=0
  product:any = {}
  listProduct:any=[]
  constructor(private  route : ActivatedRoute, private productService:ProductService) {

   }

  ngOnInit() {
    window.scrollTo(0,0)

    this.route.paramMap.subscribe((param:ParamMap)=>{
    this.id =  param.get('id')
 
    })

    const result = this.productService.getProducts().find((x:any)=>x.id==this.id)
    
    if(result){
      this.product = result   
      console.log(this.product);
      
    }
  }

}
