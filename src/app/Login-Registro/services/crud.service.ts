import { Injectable, Output, EventEmitter } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { RegistroUsuario } from '../Interfaces/Registro';
import { FormGroup } from '@angular/forms';





@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  API:string='http://localhost/Proyecto-Trabajo-Grado-Refactorizado/PHP'
  @Output() cedulaInicioSesion: EventEmitter<any>=new EventEmitter;
  constructor(private clienteHttp:HttpClient) { }

  
  public AgregarRegistro(Nombres:string,Apellidos:string,CI:string,contrasena:string):Observable<any>{
    console.log(Nombres,Apellidos,CI,contrasena);
    return this.clienteHttp.post(this.API+'/registro.php',{Nombres,Apellidos,CI,contrasena})
      .pipe(map(RegistroUsuario=>{return RegistroUsuario;}));
  }

  public InicioSesion(CI:string,contrasena:string):Observable<any>{
    console.log(CI,contrasena);
    return this.clienteHttp.post<any>(this.API+'/login.php',{CI,contrasena})
      .pipe(map(RegistroUsuario=>{
        this.setToken(RegistroUsuario);
        this.cedulaInicioSesion.emit(true);
      return RegistroUsuario;}));
      
    }
  

  //Token
  setToken(token:RegistroUsuario){
      localStorage.setItem('token', JSON.stringify(token));
  }
  getToken(){
    return  localStorage.getItem('token');
  }
  deleteToken(){
    localStorage.removeItem('token');
  }

  sesionIniciada(){
    const tokenUsuario=this.getToken();
    if(tokenUsuario!=null){
      return true;
    }
    else{
      return false;
    }
  }
}
//http://localhost/API/proyectodegrado.sql