import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ErrorPageComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  exports:[
    ErrorPageComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
