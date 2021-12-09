import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-actividad-aaae',
  templateUrl: './actividad-aaae.component.html',
  styles: [
  ]
})
export class ActividadAAAEComponent implements OnInit {

  //@Input()
  public CheckBoxs!:FormGroup;

  constructor(private rootFormGroup:FormGroupDirective) { }

  ngOnInit(): void {
    this.CheckBoxs=this.rootFormGroup.control.get('CheckBoxs') as FormGroup
  }

 /* static checkBoxs():FormGroup{
    return new FormGroup(
      {
        CheckBox_1:   new FormControl(false,[Validators.required]),
        CheckBox_2:   new FormControl(false,[Validators.required]),
        CheckBox_3:   new FormControl(false,[Validators.required]),
        CheckBox_5:   new FormControl(false,[Validators.required]),
        CheckBox_6:   new FormControl(false,[Validators.required]),
        CheckBox_7:   new FormControl(false,[Validators.required]),
        CheckBox_8:   new FormControl(false,[Validators.required]),
        CheckBox_9:   new FormControl(false,[Validators.required]),
        CheckBox_11:  new FormControl(false,[Validators.required]),
        CheckBox_12:  new FormControl(false,[Validators.required])
      }
    )
  }*/

}
