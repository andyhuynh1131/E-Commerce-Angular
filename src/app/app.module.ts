import { DialogModule } from 'primeng/dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';



import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/conponents/header/header.component';
import { SliderComponent } from './conponents/slider/slider.component';
import { PolicyComponent } from 'src/app/conponents/policy/policy.component';
import { ListProductComponent } from 'src/app/conponents/listProduct/listProduct.component';
import { FooterComponent } from 'src/app/conponents/footer/footer.component';
import { CartComponent } from './conponents/Cart/Cart.component';
import { HomeComponent } from './conponents/home/home.component';
import { ProductDetailComponent } from './conponents/product-detail/product-detail.component';
import { AdminPageComponent } from './conponents/adminPage/adminPage.component';


import { ProductService } from './service/Product.service';
import { CartService } from './service/Cart.service';
import { ConfirmationService } from 'primeng/api';
import { LoginComponent } from './conponents/login/login.component';
import { AccCountService } from './service/AccCount.service';
import { FormComponent } from './conponents/form/form.component';



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
    ProductDetailComponent,
    LoginComponent,
    AdminPageComponent,
    FormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    MatIconModule,
    HttpClientModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    AvatarModule,
    TableModule,
    ToastModule,
    ConfirmPopupModule,
  ],
  providers: [
    ProductService,
    CartService,
    ConfirmationService,
    AccCountService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
