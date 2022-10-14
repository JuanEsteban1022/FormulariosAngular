import { Component, OnInit } from '@angular/core';
import { ValidatorsService } from '../../../shared/validators/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
})
export class RegistroComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private validatorService: ValidatorsService,
    private emailValidator: EmailValidatorService) { }

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [, [Validators.required, Validators.pattern(this.validatorService.valorPattern)]],
    email: [, [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    usuario: ['', [Validators.required, this.validatorService.usuarioValido]],
    password: [, [Validators.required, Validators.minLength(6)]],
    password_conf: [, [Validators.required]],
  }, {
    validators: [this.validatorService.camposIguales('password', 'password_conf')]
  }
  );

  get emailErrorMsg(): string {
    const ers = this.miFormulario.get('email')?.errors;
    if (ers?.['required']) {
      return 'Email obligatorio'
    }
    if (ers?.['pattern']) {
      return 'el email registrado tiene formato invalido'
    }
    if (ers?.['emailTomado']) {
      return 'Este email ya fue registrado'
    }
    return ''
  }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'nomre apellido',
      email: 'test1@test.com',
      usuario: 'test123',
    });
  }

  campoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }
}
