import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {FormsModule}from "@angular/forms"
import { formatPercent } from '@angular/common';
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import { HomeComponent } from './CustomerApp.HomeComponent';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';
import { DbLogger, BaseLogger, ConsoleLogger } from '../Utility/CustomerApp.Logger';

var providerscoll:any = [];
providerscoll.push({provide: "1", useClass:DbLogger});
providerscoll.push({provide: "2", useClass:ConsoleLogger});
providerscoll.push({provide: BaseLogger, useClass:ConsoleLogger});
@NgModule({
  declarations: [
  MasterPageComponent,HomeComponent
    
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,
    FormsModule
    
  ],
  providers: [providerscoll],
  bootstrap: [MasterPageComponent]
})
export class MainModule {

 }

// {
//   provide:BaseLogger,
//   useClass: ConsoleLogger
// },
// {provide:"1",useClass:DbLogger},
// {provide:"2",useClass:ConsoleLogger}