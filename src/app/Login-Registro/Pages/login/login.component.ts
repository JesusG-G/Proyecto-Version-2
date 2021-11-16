import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { CRUDService } from '../../services/crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  
  loginDatos!:FormGroup;
  constructor(public formulario:FormBuilder,
              private crudService:CRUDService,
              private router:Router) {
      
    this.loginDatos=this.formulario.group(
      {
        CI:['',Validators.required],
        contrasena:['',Validators.required]
      }
    )
  }

  ngOnInit(): void {
  }

  inicioSesion(loginDatos:FormGroup){
    this.crudService.InicioSesion(loginDatos.value.CI,loginDatos.value.contrasena)
    .pipe(first())
        .subscribe(
            data=>{
              //const redirigir= this.crudService.redirectUrl ? this.crudService.redirectUrl : '/dashboard';
              this.router.navigate([/*redirigir*/])},
              error=>{
                alert("Cedula o contraseña incorrecta")
              }
        );
    }

    get CI() { return this.loginDatos.get('CI'); }
    get contrasena() { return this.loginDatos.get('contrasena'); }
  }


