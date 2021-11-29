import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Solicitud, Tramite } from '../../Interfaces/tramite';
import { TramiteService } from '../../services/tramite.service';



@Component({
  selector: 'app-tramite',
  templateUrl: './tramite.component.html',
  styles: [
  ]
})
export class TramiteComponent implements OnInit {

  tramite!:Tramite;
  solicitud!:FormGroup;
  datosStorage =JSON.parse(localStorage.getItem('token')!);
  fecha:Date=new Date();
  dia:number=this.fecha.getDate();
  mes:number=this.fecha.getMonth()+1;
  ano:number=this.fecha.getFullYear();

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

  constructor(public formulario:FormBuilder,
              private _snackbar:MatSnackBar,
              private tramiteSolicitud:TramiteService) { }

  ngOnInit(): void {
    this.solicitud=this.formulario.group(
      {
        tipoSolicitud:['',[Validators.required]],
        empresa:['',[Validators.required,Validators.minLength(1)]],
        RIF:['',[Validators.required,Validators.minLength(1)]],
        telf:['',[Validators.required,Validators.minLength(1)]],
        urb:['',[Validators.required,Validators.minLength(1)]],
        calle:['',[Validators.required,Validators.minLength(1)]],
        caloed:['',[Validators.required,Validators.minLength(1)]]
      }
    )
  }

  prueba(){
    console.log(this.solicitud);
    console.log(this.solicitud.controls.ti);
    console.table(this.solicitud.value);
    this.enviarSolicitud(this.solicitud)
   
  }

  get datosTramite(){
    return this.solicitud.controls;
  }
  enviarSolicitud(solicitud:FormGroup){
    this.tramite={
      solicitante:{
        Nombres:this.datosStorage[0].Nombres,
        Apellidos:this.datosStorage[0].Apellidos,
        CI:this.datosStorage[0].CI
      },
      tipo:{
        value:solicitud.value.tipoSolicitud,
        tipo:''
      },
      empresa:solicitud.value.empresa,
      RIF: solicitud.value.RIF,
      telf:solicitud.value.telf,
      direccion:{
        urb:solicitud.value.urb,
        calle:solicitud.value.calle,
        caloed:solicitud.value.caloed
      },
      fecha:{
        dia:this.dia.toString(),
        mes: this.mes.toString(),
        ano:this.ano.toString()
        
      }
    }
    
    //console.table(this.datosUsuario);
    //console.table(this.tramite);
    
    this.tramiteSolicitud.AgragarSolicitud(this.tramite)
      .subscribe(resp=>console.log('Respuesta',resp));
 }

  LimpiarFormulario(){
    this.solicitud.reset();
  }
}
