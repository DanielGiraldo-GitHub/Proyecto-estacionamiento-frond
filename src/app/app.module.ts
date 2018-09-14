import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParqueaderoModule } from './app-routing.module';
import { ParqueaderoComponent } from './parqueadero/parqueadero.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ParqueaderoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
