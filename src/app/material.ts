import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatChipsModule],
  exports: [MatButtonModule, MatCheckboxModule,MatChipsModule],
})
export class MaterialModule { }