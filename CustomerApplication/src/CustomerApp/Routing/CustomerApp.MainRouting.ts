import { Input } from "@angular/core";
import { HomeComponent } from "../Home/CustomerApp.HomeComponent";


export const MainRoutes=
[
    {path: 'Home', component: HomeComponent},
    {path: 'Customer', loadChildren: () => import('../Customer/CustomerApp.CustomerModule').then(m => m.CustomerModule)},
    {path: 'Supplier', loadChildren: () => import('../Supplier/CustomerApp.SupplierModule').then(n => n.SupplierModule)},
    {path: '', component:HomeComponent}
];
