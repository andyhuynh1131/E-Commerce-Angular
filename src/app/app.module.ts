import { MytableModule } from './../../projects/mytable/src/lib/mytable.module';

import { LanguageInterceptor } from './interceptors/language.interceptor';
import { DialogModule } from 'primeng/dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { AdminPageComponent } from './adminPage/adminPage/adminPage.component';
import { SearchComponent } from './conponents/search/search.component';
import { ProductComponent } from './conponents/product/product.component';


import { ProductService } from './service/Product.service';
import { CartService } from './service/Cart.service';
import { ConfirmationService } from 'primeng/api';
import { LoginComponent } from './conponents/login/login.component';
import { AccCountService } from './service/ac-count.service';
import { FormComponent } from './adminPage/form/form.component';
import { InputTextModule } from 'primeng/inputtext';


import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LikeComponent } from './conponents/totalPrice/total-price.component';






export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "../assets/i18n/", ".json");
}


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
    FormComponent,
    SearchComponent,
    ProductComponent,
    LikeComponent
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
    InputTextModule,
    MytableModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),


  ],
  providers: [
    ProductService,
    CartService,
    ConfirmationService,
    AccCountService,
    HttpClient,
    TranslateService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LanguageInterceptor,
      multi: true
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
