import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tramite } from 'src/app/admin/Interfaces/tramite';
import { BaseDatosService } from 'src/app/admin/services/base-datos.service';

@Component({
  selector: 'app-renlicli',
  templateUrl: './renlicli.component.html',
  styles: [
  ]
})
export class RENLICLIComponent implements OnInit {

  solicitud!:FormGroup;
  tramite!:Tramite;
  fecha:Date=new Date();
  dia:number=this.fecha.getDate();
  mes:number=this.fecha.getMonth()+1;
  ano:number=this.fecha.getFullYear();
  constructor(private fb: FormBuilder,
              private solicitudes: BaseDatosService) { }

  ngOnInit(): void {
    this.obtenerDatosForm();
  }

  public obtenerDatosForm(){
    this.solicitud=this.fb.group(      
      {
        datos: this.fb.group({
          cedula:['',[Validators.required]],
          nombre:['',[Validators.required]],
          apellido:['',[Validators.required]],
          tipoSolicitud:['RENLICLI',[Validators.required]],
          empresa: ['',[Validators.required,Validators.minLength(3)]],
          RIF:['',[Validators.required,Validators.minLength(3)]],
          telf:['',[Validators.required,Validators.minLength(3)]],
          urb:['',[Validators.required,Validators.minLength(3)]],
          calle:['',[Validators.required,Validators.minLength(1)]],
          caloed:['',[Validators.required,Validators.minLength(3)]],
        }),
        CheckBoxs: this.fb.group(
          {
            CheckBox_1:[false,[Validators.requiredTrue]],
            CheckBox_2:[false,[Validators.requiredTrue]],
            CheckBox_3:[false,[Validators.requiredTrue]],
            CheckBox_4:['',[Validators.required]],
            numero:['',[Validators.required]]
          }
        )
       /* */
      }
      )
  }

  guardar(){
    console.log(this.solicitud.get('datos')?.value.nombre);
    
    this.tramite={
      solicitante:{
        Nombres:this.solicitud.get('datos')?.value.nombre,
        Apellidos:this.solicitud.get('datos')?.value.apellido,
        CI:this.solicitud.get('datos')?.value.cedula
      },
      tipo:{
        value:this.solicitud.get('datos')?.value.tipoSolicitud,
        tipo:''
      },
      empresa:this.solicitud.get('datos')?.value.empresa,
      RIF: this.solicitud.get('datos')?.value.RIF,
      telf:this.solicitud.get('datos')?.value.telf,
      direccion:{
        urb:this.solicitud.get('datos')?.value.urb,
        calle:this.solicitud.get('datos')?.value.calle,
        caloed:this.solicitud.get('datos')?.value.caloed
      },
      fecha:{
        dia:this.dia.toString(),
        mes: this.mes.toString(),
        ano:this.ano.toString()
        
      },
      CheckBox_1:this.solicitud.get('CheckBoxs')?.value.CheckBox_1.toString(),
      CheckBox_2:this.solicitud.get('CheckBoxs')?.value.CheckBox_2.toString(),
      CheckBox_3:this.solicitud.get('CheckBoxs')?.value.CheckBox_3.toString(),
      CheckBox_4:this.solicitud.get('CheckBoxs')?.value.CheckBox_4,
      numero:this.solicitud.get('CheckBoxs')?.value.numero
    }


    this.solicitudes.AgragarSolicitud(this.tramite)
      .subscribe(resp=>console.log('Respuesta',resp));
     //this.solicitud.reset();
    }

    LimpiarFormulario(){
      this.solicitud.reset();
      this.solicitud.get('datos')?.get('tipoSolicitud')?.setValue('RENLICLI');
    }

}
