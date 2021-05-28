import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidarCamposService {

  constructor() { }

  hasErrorValidate(control:AbstractControl, error:string):boolean{
    if((control.dirty || control.touched)&& this.hasError(control, error)){
      return true;
    }
    return false;
  }

  hasError(control: AbstractControl, error: string):boolean{
    return control.hasError(error);
  }

  lengthValidar(control: AbstractControl, errorname: string): number{
    const error = control.errors[errorname];
    return error.requiredLength || error.min || error.max || 0;
  }
}
