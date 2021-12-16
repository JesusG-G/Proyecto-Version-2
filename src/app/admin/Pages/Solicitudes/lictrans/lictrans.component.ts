import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lictrans',
  templateUrl: './lictrans.component.html',
  styles: [
  ]
})
export class LICTRANSComponent implements OnInit {

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
          tipoSolicitud:['LICTRANS',[Validators.required]],
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
            CheckBox_7:[false,[Validators.requiredTrue]],
            CheckBox_8:[false,[Validators.requiredTrue]],
            CheckBox_9:[false,[Validators.requiredTrue]]
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
