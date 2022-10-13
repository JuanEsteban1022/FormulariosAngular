import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
})
export class SwitchesComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario.reset({ ...this.usuario, terminos: false });

    this.miFormulario.valueChanges.subscribe(({ terminos, ...rest }) => {
      //delete form.terminos;
      this.usuario = rest;
    });
  }

  miFormulario: FormGroup = this.formBuilder.group({
    cargo: ['nodev', Validators.required],
    notificaciones: [false, Validators.required],
    terminos: [false, Validators.requiredTrue],
  });

  usuario = {
    cargo: 'nodev',
    notificaciones: true,
  };

  guardar() {
    const formValue = { ...this.miFormulario.value };

    delete formValue.notificaciones;

    this.usuario = formValue;
  }
}
