import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidarCamposService } from '../validar-campos.service';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent {

  @Input() titulo: string;
  @Input() formGroup:FormGroup;
  @Input() controlName:string;

  constructor(public validacao: ValidarCamposService) { }

  get formControl():AbstractControl{
    return this.formGroup.controls[this.controlName];
  }

}
