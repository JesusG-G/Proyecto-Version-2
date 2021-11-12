import { Component} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CRUDService } from '../../services/crud.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent  {

  formularioRegistro:FormGroup;


  constructor(public formulario:FormBuilder,
              private crudService:CRUDService
  ) {
    this.formularioRegistro=this.formulario.group({
      Nombres:[''],
      Apellidos:[''],
      CI:[''],
      contrasena:[''],
      confirContrasena:['']
    })
   }

  enviarDatos(){
    console.log(this.formularioRegistro.value);
    this.crudService.AgregarRegistro(this.formularioRegistro.value).subscribe();
  }

}
