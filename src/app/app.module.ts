import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ParqueaderoModule } from './app-routing.module';
import { FormsModule }    from '@angular/forms';
import { ParqueaderoComponent } from './parqueadero/parqueadero.component';
import { GestionVehiculosComponent } from './gestion-vehiculos/gestion-vehiculos.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
//Material
import {MaterialModule} from './material';
import { ChartsModule } from 'ng2-charts';
import { GraficaComponent } from './grafica/grafica.component';


@NgModule({
  declarations: [
    AppComponent,
    ParqueaderoComponent,
    GestionVehiculosComponent,
    GraficaComponent
  ],
  imports: [
    ParqueaderoModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatButtonModule,
    ChartsModule
  ],
   providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
