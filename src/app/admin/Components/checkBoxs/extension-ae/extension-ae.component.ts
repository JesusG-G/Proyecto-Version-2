import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-extension-ae',
  templateUrl: './extension-ae.component.html',
  styles: [
  ]
})
export class ExtensionAEComponent implements OnInit {

  public CheckBoxs!:FormGroup;
  
  constructor(private rootFormGroup:FormGroupDirective) { }
  
  ngOnInit(): void {
    this.CheckBoxs=this.rootFormGroup.control.get('CheckBoxs') as FormGroup
  }

}
