import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  hide:boolean=true;

  constructor(public formulario:FormBuilder,
              private crudService:CRUDService,
              private router:Router,
              private validador:ValidadorService,
              private _snackbar: MatSnackBar
  ) {}
   
   ngOnInit(){
    this.formularioRegistro=this.formulario.group({
      Nombres:['',[Validators.required,Validators.minLength(3)]],
      Apellidos:['',[Validators.required,Validators.minLength(3)]],
      CI:['',[Validators.required,Validators.minLength(3)]],
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
  abrirSnackBar(mensaje:string, accion:string){
    this._snackbar.open(mensaje, accion);
  }
   aceptado(){
     this.aprobar=true;
     if(this.formularioRegistro.valid){
      this.abrirSnackBar(`Usuario creado con Exito`,'Cerrar');
       this.enviarDatos(this.formularioRegistro);
       console.table(this.formularioRegistro.value);
     }
     else{
      this.abrirSnackBar(`Error al crear Usuario`,'Cerrar');
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


