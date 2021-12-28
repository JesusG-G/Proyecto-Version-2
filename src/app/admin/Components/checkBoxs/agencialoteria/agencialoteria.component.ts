import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-agencialoteria',
  templateUrl: './agencialoteria.component.html',
  styles: [
  ]
})
export class AgencialoteriaComponent implements OnInit {

  public CheckBoxs!:FormGroup;
  
  constructor(private rootFormGroup:FormGroupDirective) { }
  
  ngOnInit(): void {
    this.CheckBoxs=this.rootFormGroup.control.get('CheckBoxs') as FormGroup
  }

}
