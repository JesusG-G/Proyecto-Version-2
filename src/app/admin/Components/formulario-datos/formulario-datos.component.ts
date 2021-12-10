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

  campoNoEsValido(campo:string){
    return this.DatosFormulario.controls[campo].errors 
          && this.DatosFormulario.controls[campo].touched;
  }

}
