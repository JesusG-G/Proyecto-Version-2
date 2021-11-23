import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { CRUDService } from '../../services/crud.service';
import { ValidadorService } from '../../services/validador.service'



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {

  formularioRegistro!:FormGroup;
  aprobar: boolean= true;

  constructor(public formulario:FormBuilder,
              private crudService:CRUDService,
              private router:Router,
              private validador:ValidadorService
  ) {}
   
   ngOnInit(){
    this.formularioRegistro=this.formulario.group({
      Nombres:['',[Validators.required,Validators.minLength(1)]],
      Apellidos:['',[Validators.required,Validators.minLength(1)]],
      CI:['',[Validators.required,Validators.minLength(1)]],
      contrasena:['',[Validators.compose([Validators.required, this.validador.Validaciondepatrones()])]],
      confirContrasena:['',[Validators.required]]
    },
    {
      validator:this.validador.CompararContrasena('contrasena','confirContrasena')
    }
    )
   }

   get controlFormularioRegistro(){
     return this.formularioRegistro.controls;
   }

   aceptado(){
     this.aprobar=true;
     console.log(this.formularioRegistro)
     if(this.formularioRegistro.valid){
       alert('Exito');
       this.enviarDatos(this.formularioRegistro);
       console.table(this.formularioRegistro.value);
     }
   }

   
   enviarDatos(formularioRegistro:FormGroup){
    console.log(formularioRegistro.value);
    this.crudService.AgregarRegistro(formularioRegistro.value.Nombres,formularioRegistro.value.Apellidos,
      formularioRegistro.value.CI,formularioRegistro.value.contrasena).pipe(first()).subscribe(data=>this.router.navigate(['auth/login'])
        )}

    get Nombres() { return this.formularioRegistro.get('Nombres'); }
    get Apellidos() { return this.formularioRegistro.get('Apellidos'); }
    get CI() { return this.formularioRegistro.get('CI'); }
    get contrasena() { return this.formularioRegistro.get('contrasena'); }
    
  }


