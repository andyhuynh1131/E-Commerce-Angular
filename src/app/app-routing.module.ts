import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { CartComponent } from './conponents/Cart/Cart.component';
import { HomeComponent } from 'src/app/conponents/home/home.component';
import { ProductDetailComponent } from 'src/app/conponents/product-detail/product-detail.component';

const routesConfig: Routes = [
  {path:'', component: HomeComponent},
  {path:'cart', component: CartComponent},
  {path:'product/:id', component: ProductDetailComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routesConfig)],


exports: [RouterModule]
})
export class AppRoutingModule {}
