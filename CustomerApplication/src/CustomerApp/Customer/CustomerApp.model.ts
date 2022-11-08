import{ 
NgForm,
FormGroup,
FormControl,
Validators,
FormBuilder
 } from '@angular/forms'

export class Customer{
    CustomerCode:string ="";
    CustomerName:string ="";
    CustomerAmount:number = 0;

    formCustomerGroup: FormGroup ;
    constructor()
    {
        
        var _builder = new FormBuilder();
        this.formCustomerGroup = _builder.group({});
        // control -->validation
        // 1 control --> i validation
        this.formCustomerGroup.addControl("CustomerNameControl", 
        new FormControl('',Validators.required)
        );

        var validationcollection =[];
        validationcollection.push(Validators.required);
        validationcollection.push(Validators.pattern("^[0-9]{4,4}$"));

        this.formCustomerGroup.addControl("CustomerCodeControl", 
        new FormControl('',Validators.compose(validationcollection))
        );
    }
}