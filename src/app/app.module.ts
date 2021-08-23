import { DialogModule } from 'primeng/dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/conponents/header/header.component';
import { SliderComponent } from './conponents/slider/slider.component';
import { PolicyComponent } from 'src/app/conponents/policy/policy.component';
import { ListProductComponent } from 'src/app/conponents/listProduct/listProduct.component';
import { FooterComponent } from 'src/app/conponents/footer/footer.component';
import { CartComponent } from './conponents/Cart/Cart.component';
import { HomeComponent } from './conponents/home/home.component';
import { ProductDetailComponent } from './conponents/product-detail/product-detail.component';


import { ProductService } from './service/Product.service';
import { CartService } from './service/Cart.service';
import { ConfirmationService } from 'primeng/api';


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
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    MatIconModule,
    HttpClientModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    CheckboxModule
  ],
  providers: [
    ProductService,
    CartService,
    ConfirmationService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
