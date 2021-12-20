import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-retiro-actividad-e',
  templateUrl: './retiro-actividad-e.component.html',
  styles: [
  ]
})
export class RetiroActividadEComponent implements OnInit {
  public CheckBoxs!:FormGroup;

  constructor(private rootFormGroup:FormGroupDirective) { }

  ngOnInit(): void {
    this.CheckBoxs=this.rootFormGroup.control.get('CheckBoxs') as FormGroup
  }


}
