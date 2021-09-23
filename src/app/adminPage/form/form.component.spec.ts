import { Product } from './../../model/Product';
import { ProductService } from './../../service/Product.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormComponent } from './form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";


describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let nameEl: DebugElement
  let priceEl: DebugElement
  let colorEl: DebugElement
  let sizeEl: DebugElement
  let button: DebugElement
  let service: ProductService
  beforeEach((async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [BrowserModule, ReactiveFormsModule, FormsModule, HttpClientModule, RouterTestingModule],
      providers: [ProductService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    nameEl = fixture.debugElement.query(By.css('#name'))
    priceEl = fixture.debugElement.query(By.css('#price'))
    colorEl = fixture.debugElement.query(By.css('#colors'))
    sizeEl = fixture.debugElement.query(By.css('#size'))
    button = fixture.debugElement.query(By.css('.p-button-success'))
    service = TestBed.inject(ProductService);
  });



  it('Create product ', () => {
    nameEl.nativeElement.value = 'Áo thun 06'
    priceEl.nativeElement.value = '200000'
    colorEl.nativeElement.value = 'orange,yellow,red'
    sizeEl.nativeElement.value = 'X,XL,XXL'

    button.triggerEventHandler('click', null)
    const productTest = {

      "qty": 1,
      "name": "Áo thun 06",
      "price": 200000,
      "image": '../../../assets/images/product-01 (1).jpg,../../../assets/images/product-01 (2).jpg'
      ,
      "colors": 'orange,red,blue',
      "size": 'L,X,XL'

    }
    service.createProduct(productTest).subscribe((product: any) => {
      console.log(product);
      expect(productTest.name).toBe(product.name)
    })

  })



  it('Edit product ', () => {

    const productTest = {
      "id": 5,
      "qty": 1,
      "name": "Áo thun 06",
      "price": 200000,
      "image": '../../../assets/images/product-01 (1).jpg,../../../assets/images/product-01 (2).jpg'
      ,
      "colors": 'orange,red,blue',
      "size": 'L,X,XL'

    }
    service.editProduct(productTest).subscribe((product: any) => {
      expect(productTest.name).toBe(product.name)
    })

  })

  it('Delete product ', () => {
    service.removeProduct(5).subscribe((product: any) => {
      expect(product.id).toBe(5)
    })

  })



});
