import { Component, OnInit } from '@angular/core';
import { TramiteService } from '../../services/tramite.service';
import { Tramite, solicitante } from '../../Interfaces/tramite';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styles: [
    `
    mat-card {
      transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
      display: block;
      position: relative;
      padding: 0px;
      border-radius: 4px;
  }
  `
  ]
})
export class ConsultaComponent implements OnInit {
  solicitudes:Tramite[]=[];
  mostrar:boolean=false;
  
  datosStorage =JSON.parse(localStorage.getItem('token')!);
  CI:string=this.datosStorage[0].CI
  constructor(private tramiteService:TramiteService) { }

  ngOnInit(): void {
    console.log(this.CI);
    this.tramiteService.ObtenerSolicitudes(this.CI).subscribe(resp=>{
      this.solicitudes=resp;
      console.log(this.solicitudes.length)
      console.table(this.solicitudes);

    });
    
  }

 

  

}
