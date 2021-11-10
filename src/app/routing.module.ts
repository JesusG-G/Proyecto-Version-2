import { NgModule } from '@angular/core';
import {Router, RouterModule,Routes} from '@angular/router';
import { LoginComponent } from './Login-Registro/Pages/login/login.component';
import { RegistroComponent } from './Login-Registro/Pages/registro/registro.component';


const routes:Routes=[
  {
    path:'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path:'registro',
    component:RegistroComponent
  },
  {
    path:'**',
    redirectTo:'login'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingModule { }
