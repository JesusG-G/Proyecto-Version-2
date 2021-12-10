import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-renovacion-lic-aa',
  templateUrl: './renovacion-lic-aa.component.html',
  styles: [
  ]
})
export class RenovacionLicAAComponent implements OnInit {

  public CheckBoxs!:FormGroup;

  constructor(private rootFormGroup:FormGroupDirective) { }

  ngOnInit(): void {
    this.CheckBoxs=this.rootFormGroup.control.get('CheckBoxs') as FormGroup
  }

}
