import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tramite } from 'src/app/admin/Interfaces/tramite';
import { BaseDatosService } from '../../../services/base-datos.service';

@Component({
  selector: 'app-licaenue',
  templateUrl: './licaenue.component.html',
  styles: [
  ]
})
export class LICAENUEComponent implements OnInit {

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
          tipoSolicitud:['LICAENUE',[Validators.required]],
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
            CheckBox_5:[false,[Validators.requiredTrue]],
            CheckBox_6:[false,[Validators.requiredTrue]],
            CheckBox_7:[false,[Validators.requiredTrue]],
            CheckBox_8:[false,[Validators.requiredTrue]],
            CheckBox_9:[false,[Validators.requiredTrue]],
            CheckBox_10:['',[Validators.required]],
            CheckBox_11:[false,[Validators.requiredTrue]],
            CheckBox_12:[false,[Validators.requiredTrue]]
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
      CheckBox_5:this.solicitud.get('CheckBoxs')?.value.CheckBox_5.toString(),
      CheckBox_6:this.solicitud.get('CheckBoxs')?.value.CheckBox_6.toString(),
      CheckBox_7:this.solicitud.get('CheckBoxs')?.value.CheckBox_7.toString(),
      CheckBox_8:this.solicitud.get('CheckBoxs')?.value.CheckBox_8.toString(),
      CheckBox_9:this.solicitud.get('CheckBoxs')?.value.CheckBox_9.toString(),
      CheckBox_10:this.solicitud.get('CheckBoxs')?.value.CheckBox_10,
      CheckBox_11:this.solicitud.get('CheckBoxs')?.value.CheckBox_11.toString(),
      CheckBox_12:this.solicitud.get('CheckBoxs')?.value.CheckBox_12.toString()
    }


    this.solicitudes.AgragarSolicitud(this.tramite)
      .subscribe(resp=>console.log('Respuesta',resp));
     //this.solicitud.reset();
    }

    LimpiarFormulario(){
      this.solicitud.reset();
      this.solicitud.get('datos')?.get('tipoSolicitud')?.setValue('LICAENUE');
    }

  }

