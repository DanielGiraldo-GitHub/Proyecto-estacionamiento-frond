import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ParqueaderoComponent } from './parqueadero/parqueadero.component';
import { GestionVehiculosComponent } from "./gestion-vehiculos/gestion-vehiculos.component";

const routes: Routes =[
    {path : '',redirectTo :'/appComponent',pathMatch :'full'},
    {path: 'parqueaderoComponent',component:ParqueaderoComponent },
    {path: 'gestionVehiculosComponent',component:GestionVehiculosComponent},
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class ParqueaderoModule { }
