import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-datos',
  templateUrl: './formulario-datos.component.html',
  styles: [
  ]
})
export class FormularioDatosComponent implements OnInit{
  @Input()
  DatosFormulario!:FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.DatosFormulario=this.rootFormGroup.control.get('datos') as FormGroup;
  }

/* static datos():FormGroup{
    return new FormGroup(
       {
        cedula: new FormControl('',[Validators.required]),
        nombre: new FormControl('',[Validators.required]),
        apellido: new FormControl('',[Validators.required]),
        tipoSolicitud: new FormControl('',[Validators.required]),
        empresa: new FormControl('',[Validators.required,Validators.minLength(3)]),
        RIF:new FormControl('',[Validators.required,Validators.minLength(3)]),
        telf:new FormControl('',[Validators.required,Validators.minLength(3)]),
        urb:new FormControl('',[Validators.required,Validators.minLength(3)]),
        calle:new FormControl('',[Validators.required,Validators.minLength(3)]),
        caloed:new FormControl('',[Validators.required,Validators.minLength(3)]),
      }
    )
  }*/

}
