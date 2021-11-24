import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LRRoutingModule } from './lrrouting.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

//Componentes
import { LoginComponent } from './Pages/login/login.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { MenuComponent } from './Components/menu/menu.component';







@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    MenuComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LRRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class LoginRegistroModule { }
