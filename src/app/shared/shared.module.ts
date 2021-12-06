import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ErrorPageComponent
  ],
  exports:[
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
