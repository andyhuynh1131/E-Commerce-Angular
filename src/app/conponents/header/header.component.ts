import { Component, OnInit, Input, OnChanges,SimpleChanges } from '@angular/core';
import { CartService } from './../../service/Cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
   console.log(changes);
   
  }
  
   totalProduct:any=0

  constructor(private cartService:CartService) {
   }

   getTotal(){
     this.totalProduct = this.cartService.getTotal()
   }
  ngOnInit() {
   const interval = setInterval(()=>{
     this.getTotal()
   },500)
  }

 

}
