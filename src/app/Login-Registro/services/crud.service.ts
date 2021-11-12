import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { RegistroUsuario } from './Registro';




@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  API:string='http://localhost/API/'
  constructor(private clienteHttp:HttpClient) { }

  AgregarRegistro(datos:RegistroUsuario):Observable<any>{
    return this.clienteHttp.post(this.API+"insertar=1",datos);
  }
}
//http://localhost/API/proyectodegrado.sql