import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './adminPage/adminPage.component';
import { FormComponent } from './form/form.component';




const routesConfig: Routes = [
    { path: 'admin', component: AdminPageComponent },
    { path: 'form', component: FormComponent },
    { path: 'form/:id', component: FormComponent },
];


@NgModule({
    imports: [RouterModule.forChild(routesConfig)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
