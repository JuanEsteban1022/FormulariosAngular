import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {
  public valorPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  constructor() { }

  // Validación sincrona, personalizada
  usuarioValido(control: FormControl): ValidationErrors | null {
    const valor = control.value?.trim().toLowerCase();
    //console.log(valor);
    if (valor === 'test1') {
      return {
        layout: true,
      };
    }
    return null;
  }

  camposIguales(campo1: string, campo2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;
      if (pass1 !== pass2) {
        formGroup.get(campo2)?.setErrors({ noIguales: true });
        return { noIguales: true }
      }
      if (formGroup.get(campo2)?.hasError('noIguales')) {
        delete formGroup.get(campo2)?.errors?.["noIguales"];
        formGroup.get(campo2)?.updateValueAndValidity();
      }
      return null;
    }
  }
}


