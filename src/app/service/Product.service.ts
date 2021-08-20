import { Injectable} from '@angular/core'

@Injectable()
export  class ProductService  {
    listProduct:any =  [
        {
          id:1,
          name:'Áo thun Dinosaur 01',
          qty:1,
          price:189000,
          image:['../../../assets/images/product-01 (1).jpg','../../../assets/images/product-01 (2).jpg'],
          colors: ['blue', 'red','orange'],
          size:["S", 'M', 'L', 'XL']
      },
      {
          id:2,
          name:'Áo thun Dinosaur 02',
          qty:1,
          price:199000,
          image:['../../../assets/images/product-02 (1).jpg','../../../assets/images/product-02 (2).jpg'],
          colors: ['blue', 'red','orange'],
          size:["S", 'M', 'L', 'XL']
      },
      {
          id:3,
          name:'Áo thun Dinosaur 03',
          qty:1,
          price:389000,
          image:['../../../assets/images/product-06 (1).jpg','../../../assets/images/product-06 (2).jpg'],
          colors: ['blue', 'red','orange'],
          size:["S", 'M', 'L', 'XL']
      },
      {
          id:4,
          name:'Áo thun Dinosaur 04',
          qty:1,
          price:289000,
          image:['../../../assets/images/product-05 (1).jpg','../../../assets/images/product-05 (2).jpg'],
          colors: ['blue', 'red','orange'],
          size:["S", 'M', 'L', 'XL']
      },
    ]
    
    getProducts(){
        return this.listProduct
    }

    getbyId(id:number){
        const result = this.listProduct.find((x:any)=>x.id===id)
       return result;
         
     }

    constructor(){
        this.listProduct
    }
}