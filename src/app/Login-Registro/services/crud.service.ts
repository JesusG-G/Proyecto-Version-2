import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { RegistroUsuario } from './Registro';




@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  API:string='http://localhost/Proyecto-Trabajo-Grado-Refactorizado/PHP'
  constructor(private clienteHttp:HttpClient) { }

  AgregarRegistro(Nombres:string,Apellidos:string,CI:string,contrasena:string):Observable<any>{
    console.log(Nombres,Apellidos,CI,contrasena);
    return this.clienteHttp.post(this.API+'/registro.php',{Nombres,Apellidos,CI,contrasena}).pipe(map(RegistroUsuario=>{return RegistroUsuario;}));
  }
}
//http://localhost/API/proyectodegrado.sql