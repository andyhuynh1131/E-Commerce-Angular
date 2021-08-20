import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/conponents/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { SliderComponent } from './conponents/slider/slider.component';
import { PolicyComponent } from 'src/app/conponents/policy/policy.component';
import { ListProductComponent } from 'src/app/conponents/listProduct/listProduct.component';
import { FooterComponent } from 'src/app/conponents/footer/footer.component';
import {CartComponent}from './conponents/Cart/Cart.component';
import {AppRoutingModule}from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {ProductService} from './service/Product.service';
import { CartService } from './service/Cart.service';
import { HomeComponent } from './conponents/home/home.component';
import { ProductDetailComponent } from './conponents/product-detail/product-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    PolicyComponent,
    ListProductComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    ProductDetailComponent
  ],
  imports: [



    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [ProductService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
