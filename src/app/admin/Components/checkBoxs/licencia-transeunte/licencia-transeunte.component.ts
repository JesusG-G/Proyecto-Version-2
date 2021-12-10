import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-licencia-transeunte',
  templateUrl: './licencia-transeunte.component.html',
  styles: [
  ]
})
export class LicenciaTranseunteComponent implements OnInit {

  public CheckBoxs!:FormGroup;

  constructor(private rootFormGroup:FormGroupDirective) { }

  ngOnInit(): void {
    this.CheckBoxs=this.rootFormGroup.control.get('CheckBoxs') as FormGroup
  }
}
