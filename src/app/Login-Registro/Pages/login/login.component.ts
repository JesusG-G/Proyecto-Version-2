import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { CRUDService } from '../../services/crud.service';
import { ValidadorService } from '../../services/validador.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles:[
    
  ]
})
export class LoginComponent implements OnInit {
  
  loginDatos!:FormGroup;
  aprobar:boolean=true;
  hide:boolean=true;

  constructor(public formulario:FormBuilder,
              private crudService:CRUDService,
              private router:Router,
              private validador:ValidadorService,
              private _snackbar: MatSnackBar) {
      
    
  }

  ngOnInit(): void {
    this.loginDatos=this.formulario.group(
      {
        CI:['',[Validators.required,Validators.minLength(1)]],
        contrasena:['',[Validators.compose([Validators.required, this.validador.Validaciondepatrones()])]]
      }

    )
  }

  get controlFormularioRegistro(){
    return this.loginDatos.controls;
  }
  abrirSnackBar(mensaje:string, accion:string){
    this._snackbar.open(mensaje, accion);
  }
  aceptado(){
   
    if(this.loginDatos.valid){
      this.abrirSnackBar(`Bienvenido`,'Cerrar');
      this.inicioSesion(this.loginDatos);
    }
    else{
      this.abrirSnackBar(`Cédula o Contraseña invalida`,'Cerrar');
    }
  }

  inicioSesion(loginDatos:FormGroup){
    this.crudService.InicioSesion(loginDatos.value.CI,loginDatos.value.contrasena)
    .pipe(first())
        .subscribe(
            data=>{
              this.router.navigate(['usuario']);}
        );
    }

    get CI() { return this.loginDatos.get('CI'); }
    get contrasena() { return this.loginDatos.get('contrasena'); }
  }


