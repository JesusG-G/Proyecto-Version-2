import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-actividad-aaae',
  templateUrl: './actividad-aaae.component.html',
  styles: [
  ]
})
export class ActividadAAAEComponent implements OnInit {

  
  public CheckBoxs!:FormGroup;

  constructor(private rootFormGroup:FormGroupDirective) { }

  ngOnInit(): void {
    this.CheckBoxs=this.rootFormGroup.control.get('CheckBoxs') as FormGroup
  }

 

}
