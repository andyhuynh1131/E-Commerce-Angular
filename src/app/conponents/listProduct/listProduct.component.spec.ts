import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';


import { ListProductComponent } from './listProduct.component';
import { ProductService } from 'src/app/service/Product.service';

describe('ListProductComponent', () => {
  let component: ListProductComponent;
  let fixture: ComponentFixture<ListProductComponent>;
  let service: ProductService

  beforeEach((async () => {
    TestBed.configureTestingModule({
      declarations: [ListProductComponent],
      imports: [HttpClientModule, TranslateModule.forRoot()],
      providers: [ProductService]
    })
      .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(ProductService);
  });

  // it('Get totalList by productservice ', async () => {
  //   let totalList: number = 0
  //   service.getProducts().subscribe((value: any) => {
  //     totalList = value.length
  //     expect(totalList).toEqual(5)
  //   })

  // })

  // it('Get productbyId by productservice ', async () => {
  //   let product: any = {
  //     "id": 1,
  //     "qty": 1,
  //     "name": "Áo thun Dinosaur 01",
  //     "price": 189000,
  //     "image": [
  //       "../../../assets/images/product-01 (1).jpg",
  //       "../../../assets/images/product-01 (2).jpg"
  //     ],
  //     "colors": [
  //       "red",
  //       "blue",
  //       "orange"
  //     ],
  //     "size": [
  //       "S",
  //       "M",
  //       "L",
  //       "XL"
  //     ]
  //   }
  //   service.getProductbyId(1).subscribe((value: any) => {
  //     expect(product).toEqual(value)
  //   })

  // })






});
