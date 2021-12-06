import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { BienvenidaComponent } from './Pages/bienvenida/bienvenida.component';
import { SolicitudComponent } from './Pages/solicitud/solicitud.component';



const routes:Routes=[
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'Inicio',
        component: BienvenidaComponent
      },
      {
        path:'solicitud',
        component: SolicitudComponent
      },
      {
        path:'**',
        redirectTo: 'Inicio'
      }
    ]
  }
]

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AdminRoutingModule { }
