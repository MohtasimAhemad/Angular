import { Component, Injector } from '@angular/core';
import {Customer} from "./CustomerApp.model"
import{ILogger,FileLogger, BaseLogger} from "../Utility/CustomerApp.Logger"
// import {Http} from '@angular/http'
import {HttpClient} from "@angular/common/http"
@Component({
  templateUrl: './CustomerApp.CustomerView.html',
  styleUrls: ['./CustomerApp.component.css']
})
export class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel : Customer = new Customer();
  CustomerModels : Array<Customer> = new Array<Customer>();
  Logobj:BaseLogger = new  BaseLogger;
  Disable:boolean = false;
  constructor(_injector:Injector
    ,public httpc:HttpClient){
    this.Logobj = _injector.get("1");
    this.Logobj.Log();
  }
  PosttoServer(){
    //http://localhost:3000/Customers
    // create a light weight DTO Data transfer object
    this.Disable = true;
    var custdto:any = {};
    custdto.CustomerCode = this.CustomerModel.CustomerCode;
    custdto.CustomerName = this.CustomerModel.CustomerName;
    custdto.CustomerAmount = this.CustomerModel.CustomerAmount;
    this.httpc.post("http://localhost:3000/Customers",
        custdto).subscribe(res=>this.Success(res),
    res=>this.Error(res));
  }
  GetFromServer(){
    
    this.httpc.get("http://localhost:3000/Customers").
    subscribe(res=>this.SuccessGet(res),res=>this.Error(res));
  }
  Error(res:any) {
    console.debug(res.json());
  }
  Success(res:any) {
   this.GetFromServer();
  }
  SuccessGet(res:any) {
    this.CustomerModels = res;
    this.Disable = false;
    this.CustomerModel = new Customer();
  }
  SelectCustomer(_selected:any){
    this.CustomerModel = _selected;
  }
  Add()
  {

    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();
  }
  
  

}




