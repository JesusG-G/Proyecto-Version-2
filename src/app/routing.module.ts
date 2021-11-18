import { NgModule } from '@angular/core';
import {Router, RouterModule,Routes} from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';


const routes:Routes=[
  {
    path:'auth',
    loadChildren: () => import('./Login-Registro/login-registro.module').then(m=>m.LoginRegistroModule)
  },
  {
    path:'usuario',
    loadChildren: ()=> import('./usuario/usuario.module').then(m=>m.UsuarioModule)
  },
  {
    path:'404',
    component:ErrorPageComponent
  },
  {
    path:'**',
    redirectTo:'404'
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
