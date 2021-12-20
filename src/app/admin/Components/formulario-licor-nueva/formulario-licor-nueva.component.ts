import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-formulario-licor-nueva',
  templateUrl: './formulario-licor-nueva.component.html',
  styles: [
  ]
})
export class FormularioLicorNuevaComponent implements OnInit {

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
