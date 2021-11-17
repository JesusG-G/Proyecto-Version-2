import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { RegistroComponent } from './Pages/registro/registro.component';

const routes: Routes=[
  {
    path:'auth',
    children:[
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'registro',
        component: RegistroComponent
      },
      {
        path:'**',
        redirectTo:'login'
      }
    ]
  }
]


@NgModule({
 
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class LRRoutingModule { }
