import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ValidarCamposService } from '../validar-campos.service';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent  {

  model: NgbDateStruct;

  @Input() titulo:string;
  @Input() formGroup:FormGroup;
  @Input() controlName:string

  constructor(public validacao: ValidarCamposService) { }

  get formControl():AbstractControl{
    return this.formGroup.controls[this.controlName];
  }
}
