import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tramite } from '../Interfaces/tramite';
import { RegistroUsuario } from 'src/app/Login-Registro/Interfaces/Registro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TramiteService {

  API:string='http://localhost/Proyecto-Trabajo-Grado-Refactorizado/PHP'
  constructor(private clienteHttp:HttpClient) { }
  public AgragarSolicitud(datos:Tramite): Observable<Tramite>{
    console.table(datos);

    return this.clienteHttp.post<Tramite>(this.API+'/solicitud.php',datos);
  }
}
