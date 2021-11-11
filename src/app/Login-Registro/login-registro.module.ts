import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

=======
>>>>>>> 587e0f42d356c5c2c6cd61214cdd66c867ba9799
import { LoginComponent } from './Pages/login/login.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { MenuComponent } from './Components/menu/menu.component';
import { RoutingModule } from '../routing.module';



<<<<<<< HEAD

=======
>>>>>>> 587e0f42d356c5c2c6cd61214cdd66c867ba9799
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
<<<<<<< HEAD
    RoutingModule,
    FormsModule,
    ReactiveFormsModule
=======
    RoutingModule
>>>>>>> 587e0f42d356c5c2c6cd61214cdd66c867ba9799
  ]
})
export class LoginRegistroModule { }
