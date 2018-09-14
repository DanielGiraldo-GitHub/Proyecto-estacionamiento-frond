import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";

const routes: Routes =[
    {path : '',redirectTo :'/appComponent',pathMatch :'full'},
  { path: 'appComponent',component:AppComponent }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class ParqueaderoModule { }
