import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cambdeno',
  templateUrl: './cambdeno.component.html',
  styles: [
  ]
})
export class CAMBDENOComponent implements OnInit {

  solicitud!:FormGroup;
  
  constructor(private fb: FormBuilder) { }

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
          tipoSolicitud:['CAMBDENO',[Validators.required]],
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
            CheckBox_4:[false,[Validators.requiredTrue]],
            CheckBox_5:[false,[Validators.requiredTrue]],
            CheckBox_6:[false,[Validators.requiredTrue]],
            CheckBox_7:['',[Validators.required]],
            CheckBox_8:[false,[Validators.requiredTrue]],
            CheckBox_9:[false,[Validators.requiredTrue]],
            CheckBox_10:[false,[Validators.requiredTrue]],
            CheckBox_11:['',[Validators.required]]
          }
        )
       /* */
      }
      )
  }

  guardar(){
    console.table(this.solicitud.value);
  }

}
