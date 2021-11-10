import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Pages/login/login.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { MenuComponent } from './Components/menu/menu.component';
import { RoutingModule } from '../routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    MenuComponent
  ],
  exports:[
    LoginComponent,
    RegistroComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class LoginRegistroModule { }
