import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { MytableComponent } from './mytable.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    MytableComponent
  ],
  imports: [
    TableModule,
    BrowserModule,
    ButtonModule,
    InputTextModule,
    AppRoutingModule
  ],
  exports: [
    MytableComponent
  ]
})
export class MytableModule { }
