import { Component , Injector} from '@angular/core';
import{ILogger,FileLogger, BaseLogger, DbLogger, ConsoleLogger} from "../Utility/CustomerApp.Logger"



@Component({
  templateUrl: './CustomerApp.HomeView.html',
  // styleUrls: ['./HomeComponent.css']
})
export class HomeComponent {

  Logobj: BaseLogger = new BaseLogger;
  constructor(_injector:Injector)
  {
    this.Logobj=_injector.get("1");
    this.Logobj.Log();
  }
}
