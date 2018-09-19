import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ParqueaderoModule } from './app-routing.module';
import { FormsModule }    from '@angular/forms';
import { ParqueaderoComponent } from './parqueadero/parqueadero.component';
import { GestionVehiculosComponent } from './gestion-vehiculos/gestion-vehiculos.component';

@NgModule({
  declarations: [
    AppComponent,
    ParqueaderoComponent,
    GestionVehiculosComponent
  ],
  imports: [
  BrowserModule,
  ParqueaderoModule,
  RouterModule,
  HttpClientModule,
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
