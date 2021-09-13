import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CartComponent } from './conponents/Cart/Cart.component';
import { HomeComponent } from 'src/app/conponents/home/home.component';
import { ProductDetailComponent } from 'src/app/conponents/product-detail/product-detail.component';
import { LoginComponent } from './conponents/login/login.component';
import { SearchComponent } from './conponents/search/search.component';
import { AdminRoutingModule } from './adminPage/admin-routing.module';
import { AdminPageComponent } from './adminPage/adminPage/adminPage.component';

const routesConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search/:name', component: SearchComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];


@NgModule({
  imports: [AdminRoutingModule
    , RouterModule.forRoot(routesConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
