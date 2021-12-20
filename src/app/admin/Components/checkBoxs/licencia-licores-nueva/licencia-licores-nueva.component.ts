import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-licencia-licores-nueva',
  templateUrl: './licencia-licores-nueva.component.html',
  styles: [
  ]
})
export class LicenciaLicoresNuevaComponent implements OnInit {
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
}
