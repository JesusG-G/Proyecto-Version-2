import { NgModule } from '@angular/core';
import {Router, RouterModule,Routes} from '@angular/router';



const routes:Routes=[
  {
    path:'auth',
    loadChildren: () => import('./Login-Registro/login-registro.module').then(m=>m.LoginRegistroModule)
  },
  {
    path:'usuario',
    loadChildren:()=> import('./usuario/usuario.module').then(m=>m.UsuarioModule)
  },
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path:'**',
    redirectTo:'auth'
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
