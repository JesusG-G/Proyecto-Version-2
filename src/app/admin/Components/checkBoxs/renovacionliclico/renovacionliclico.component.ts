import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-renovacionliclico',
  templateUrl: './renovacionliclico.component.html',
  styles: [
  ]
})
export class RenovacionliclicoComponent implements OnInit {
  indoles:string[]=[
    "MN",
    "MY",
    "C",
    "CV"
  ];
  public CheckBoxs!:FormGroup;
  
  constructor(private rootFormGroup:FormGroupDirective) { }
  
  ngOnInit(): void {
    this.CheckBoxs=this.rootFormGroup.control.get('CheckBoxs') as FormGroup
  }
  campoNoEsValido(campo:string){
    return this.CheckBoxs.controls[campo].errors 
          && this.CheckBoxs.controls[campo].touched;
  }
}
