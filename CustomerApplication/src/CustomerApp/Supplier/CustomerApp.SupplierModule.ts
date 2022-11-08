import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {FormsModule}from "@angular/forms"
import { formatPercent } from '@angular/common';
import { SupplierComponent } from './CustomerApp.SupplierComponent';
import { SupplierRoutes } from '../Routing/CustomerApp.SupplierRouting';
import {  CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';


@NgModule({
  declarations: [
   SupplierComponent
    
  ],
  imports: [
    RouterModule.forChild(SupplierRoutes),
    CommonModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }

