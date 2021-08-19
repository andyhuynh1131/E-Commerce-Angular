import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-listProduct',
  templateUrl: './listProduct.component.html',
  styleUrls: ['./listProduct.component.css']
})
export class ListProductComponent implements OnInit {

  @Input() listProduct:any;
  @Output() addToCart = new EventEmitter()
  constructor() { }

  ngOnInit() {
    console.log(this.listProduct);
    
  }

  addToCartById(id:number){
    const result  = this.listProduct.find((x:any)=>x.id===id)
    this.addToCart.emit(result)
    
  }

}
