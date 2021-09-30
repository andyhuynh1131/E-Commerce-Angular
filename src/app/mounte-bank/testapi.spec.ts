import { ProductService } from 'src/app/service/Product.service';
import { HttpClientModule } from '@angular/common/http';
/* tslint:disable:no-unused-variable */
import {  TestBed } from '@angular/core/testing';


describe('AdminPageComponent', () => {
    let service:ProductService
    const productTest:any = {
        "qty": 1,
        "name": "Áo thun Dinosaur 01",
        "price": 189000,
        "image": '../../../assets/images/product-01 (1).jpg,../../../assets/images/product-01 (2).jpg',
        "colors":"red,blue,orange",
        "size":"S,L,XL"
      }

    const productUpdateTest :any = {
        "qty": 1,
        "name": "Áo thun Dinosaur 01 updated",
        "price": 200000,
        "image": '../../../assets/images/product-01 (1).jpg,../../../assets/images/product-01 (2).jpg',
        "colors":"red,blue,orange",
        "size":"S,L,XL"
      }

  beforeEach((async() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[ProductService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(ProductService);
  });

//   it('Test API get products by id', async ()=>{
//     service.getProductbyId(1).subscribe((product:any)=>{
//         expect(product.id).toEqual(1)
//     })
//   })

//   it('Test API get products', async ()=>{
//     service.getProducts().subscribe((product:any)=>{
//         expect(product.length).toEqual(4)
//     })
//   })

//   it('Test API post products', async ()=>{
//     service.createProduct(productTest).subscribe((product:any)=>{
//         expect(product.id).toEqual(10)
//     })
//   })

//   it('Test API put products', async ()=>{
//     service.editProduct(productUpdateTest).subscribe((product:any)=>{
      
//         expect(product.price).toEqual(productUpdateTest.price)
//     })
//   })

  it('Test API delete products', async ()=>{
    service.removeProduct(1).subscribe((product:any)=>{
        expect(product.id).toEqual(1)
    })
  })
  


});
