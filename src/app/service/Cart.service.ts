import { Injectable} from '@angular/core'

@Injectable()
export  class CartService  {
   listCart:any =[]
    
    getTotal(){
        return this.listCart.length
    }

    getProductInCart(){
        return this.listCart
    }

    addToCart(product:any):void{
        const result = this.listCart.find((x:any)=> x.id === product.id)
        if(result){
            result.qty +=  1
        }else{
            this.listCart.push(product) 
        }
      
       
    }

    


    constructor(){

    }
}