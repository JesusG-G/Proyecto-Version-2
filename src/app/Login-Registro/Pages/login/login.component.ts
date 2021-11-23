import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { CRUDService } from '../../services/crud.service';
import { ValidadorService } from '../../services/validador.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles:[
    
  ]
})
export class LoginComponent implements OnInit {
  
  loginDatos!:FormGroup;
  aprobar:boolean=true;

  constructor(public formulario:FormBuilder,
              private crudService:CRUDService,
              private router:Router,
              private validador:ValidadorService) {
      
    
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

  aceptado(){
    this.aprobar=true;
    if(this.loginDatos.valid){
      alert("Bienvenido");
      this.inicioSesion(this.loginDatos);
    }
  }

  inicioSesion(loginDatos:FormGroup){
    this.crudService.InicioSesion(loginDatos.value.CI,loginDatos.value.contrasena)
    .pipe(first())
        .subscribe(
            data=>{
              alert("Felicidades");
              this.router.navigate(['usuario']);
              //const redirigir= this.crudService.redirectUrl ? this.crudService.redirectUrl : '/dashboard';
              /*this.router.navigate([/*redirigir])*/},
              error=>{
                alert("Cedula o contraseña incorrecta")
                
              }
        );
    }

    get CI() { return this.loginDatos.get('CI'); }
    get contrasena() { return this.loginDatos.get('contrasena'); }
  }


