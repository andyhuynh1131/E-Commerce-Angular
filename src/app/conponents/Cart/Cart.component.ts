import { Component, OnInit } from '@angular/core';
import { CartService } from './../../service/Cart.service';
import { NumberFormatStyle } from '@angular/common';
import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-Cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.css']
})
export class CartComponent implements OnInit {
  listCart:any = []
  sumprice:any =0
  sumtotal:any=0
  constructor(private cartService:CartService) { 

  }

  ngOnInit() {
  window.scrollTo(0,0)
  const interval = setInterval(()=>{
      this.listCart= this.cartService.getProductInCart()
     
      this.updateSum()
  },500)


   
  }

  updateSum(){
   this.sumprice = this.listCart.reduce((acc:any, curr:any)=> acc + curr.qty * curr.price, 0)
   this.sumtotal = this.listCart.reduce((acc:any, curr:any)=> acc + curr.qty, 0)
  }

  minus(id:number){
   const result = this.listCart.find((x:any)=>x.id===id)
   if(result.qty>1){
    result.qty = result.qty -1
    this.updateSum()
    } else{
      const index = this.listCart.findIndex((x:any)=>x.id===id)
      this.listCart.splice(index,1)
      this.updateSum()
    }
  
  }

  plus(id:number){
    const result = this.listCart.find((x:any)=>x.id===id)
   
    result.qty = result.qty + 1
    this.updateSum()
   
  }

  changeQty(qty:string, id:number){
    const y:number =  +qty
    if(y >0){
      const result = this.listCart.find((x:any)=>x.id === id)
      if(result){
        result.qty = qty
      }
    }else{
      const result = this.listCart.find((x:any)=>x.id === id)
      if(result){
        result.qty = 1
      }
    }
  
  }


}
