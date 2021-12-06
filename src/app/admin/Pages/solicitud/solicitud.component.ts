import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/usuario/Interfaces/tramite';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styles: [
  ]
})
export class SolicitudComponent implements OnInit {

  seleccion!:string;
  tiposSolicitud:Solicitud[]=[
    { 
      value:'LICAENUE',
      tipo:'Licencia de Actividad Económica Nueva'
    },
    {value: 'LICAANUE',
      tipo:'Licencia de Actividad Aduanera Nueva'},
    {
      value:'RENLICAA',
      tipo:'Renovación de Licencia de Act. Aduanera'},
    {
      value:'RENLICAE',
      tipo:'Renovación de Licencia de Act. Económica'},
    {
      value:'EXTACTEC',
      tipo:'Extensión de Actividad Económica'},
    {
      value:'RETACECO',
      tipo:'Retiro de Actividad Economica'},
    {
      value:'LICTRANS',
      tipo:'Licencia de Transeúnte'},
    {
      value:'CAMBDIRE',
      tipo:'Cambio de Dirección'},
    {
      value:'COMDOMFI',
      tipo:'Constancia de Domicilio Fiscal'},
    {
      value:'CAMBDENO',
      tipo:'Cambio de Denominación'},
    {
      value:'SOLSOLVE',
      tipo:'Solicitud de Solvencia Municipal'},
    {
      value:'LICORENU',
      tipo:'Licencia de Expendido de Bebidas Alcoholicas Nueva'},
    {
      value:'RENLICLI',
      tipo:'Renovación de Licencia de Licores'},
    {
      value:'PERFUNLOT',
      tipo:'Permiso de funcionamiento, Agencia de Lotería'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
