import { TranslateModule } from '@ngx-translate/core';
/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';


import { ProductComponent } from './product.component';
import { CommonModule } from '@angular/common';


describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  const product: any = {
    "id": 1,
    "qty": 1,
    "name": "Áo thun Dinosaur 01",
    "price": 189000,
    "image": [
      "../../../assets/images/product-01 (1).jpg",
      "../../../assets/images/product-01 (2).jpg"
    ],
    "colors": [
      "red",
      "blue",
      "orange"
    ],
    "size": [
      "S",
      "M",
      "L",
      "XL"
    ]
  }
  beforeEach((async () => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent],
      imports: [
        TranslateModule.forRoot(),
        CommonModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('raises the selected event when clicked', () => {
    component.product = product;
    component.addTocart.subscribe((selectedHero: any) => {
      console.log(selectedHero);
      expect(selectedHero.id).toEqual(product.id)
    });
  })
});
