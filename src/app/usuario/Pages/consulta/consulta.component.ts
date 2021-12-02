import { Component, OnInit } from '@angular/core';
import { TramiteService } from '../../services/tramite.service';
import { Tramite, solicitante } from '../../Interfaces/tramite';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styles: [
  ]
})
export class ConsultaComponent implements OnInit {
  solicitudes:Tramite[]=[]
  datosStorage =JSON.parse(localStorage.getItem('token')!);
  CI:string=this.datosStorage[0].CI
  constructor(private tramiteService:TramiteService) { }

  ngOnInit(): void {
    console.log(this.CI);
    this.tramiteService.ObtenerSolicitudes(this.CI).subscribe(resp=>{
      this.solicitudes=resp;
      console.log(this.solicitudes)
      console.table(this.solicitudes);
    });
    
  }

}
