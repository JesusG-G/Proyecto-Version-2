import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-solvenciam',
  templateUrl: './solvenciam.component.html',
  styles: [
  ]
})
export class SolvenciamComponent implements OnInit {

  public CheckBoxs!:FormGroup;

  constructor(private rootFormGroup:FormGroupDirective) { }

  ngOnInit(): void {
    this.CheckBoxs=this.rootFormGroup.control.get('CheckBoxs') as FormGroup
  }

}
