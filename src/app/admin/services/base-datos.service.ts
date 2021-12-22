import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tramite } from '../Interfaces/tramite';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosService {


  API:string='http://localhost/Proyecto-Trabajo-Grado-Refactorizado/PHP'
  constructor(private clienteHttp:HttpClient) { }

  public AgragarSolicitud(datos:Tramite): Observable<Tramite>{
    console.table(datos);
    
    return this.clienteHttp.post<Tramite>(this.API+'/Solicitudes.php',datos);
  }
 
}
