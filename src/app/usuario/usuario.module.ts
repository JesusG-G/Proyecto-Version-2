import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Compoenentes


import { BienvenidaComponent } from './Pages/bienvenida/bienvenida.component';
import { HomeComponent } from './Pages/home/home.component';
import { TramiteComponent } from './Pages/tramite/tramite.component';
import { ConsultaComponent } from './Pages/consulta/consulta.component';





@NgModule({
  declarations: [
    HomeComponent,
    BienvenidaComponent,
    TramiteComponent,
    ConsultaComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsuarioModule { }
