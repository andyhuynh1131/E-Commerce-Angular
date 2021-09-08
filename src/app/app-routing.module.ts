import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CartComponent } from './conponents/Cart/Cart.component';
import { HomeComponent } from 'src/app/conponents/home/home.component';
import { ProductDetailComponent } from 'src/app/conponents/product-detail/product-detail.component';
import { LoginComponent } from './conponents/login/login.component';
import { AdminPageComponent } from './conponents/adminPage/adminPage.component';
import { FormComponent } from './conponents/form/form.component';
import { SearchComponent } from './conponents/search/search.component';

const routesConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'form', component: FormComponent },
  { path: 'form/:id', component: FormComponent },
  { path: 'search/:name', component: SearchComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routesConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
