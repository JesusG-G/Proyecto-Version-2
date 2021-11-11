<<<<<<< HEAD
import { Component} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 587e0f42d356c5c2c6cd61214cdd66c867ba9799

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
<<<<<<< HEAD
export class RegistroComponent  {

  formularioRegistro:FormGroup;


  constructor(public formulario:FormBuilder) {
    this.formularioRegistro=this.formulario.group({
      Nombres:[''],
      Apellidos:[''],
      CI:[''],
      contraseña:[''],
      confirContraseña:['']
    })
   }

  enviarDatos(){
   
    console.log("Me presionaste prueba");
    console.log(this.formularioRegistro.value);
=======
export class RegistroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
>>>>>>> 587e0f42d356c5c2c6cd61214cdd66c867ba9799
  }

}
