import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { MytableComponent } from '../lib/components/table/mytable.component'
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MytableComponent
  ],
  imports: [
    TableModule,
    BrowserModule,
    ButtonModule,
    InputTextModule,
    AppRoutingModule,
    MultiSelectModule,
    FormsModule
  ],
  exports: [
    MytableComponent
  ]
})
export class MytableModule { }
