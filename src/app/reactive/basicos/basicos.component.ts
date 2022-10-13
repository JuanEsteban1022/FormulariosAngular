import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario.setValue({
      nombre: 'JavaScript',
      precio: 1600,
      existencia: 1000
    })
  }
  // Reemplazado por FormBuilder
  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('JavaScript'),
  //   precio: new FormControl(0),
  //   existencia: new FormControl(0),
  // });

  // Metodo FormBuilder
  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencia: [, [Validators.required, Validators.min(0)]],
  });

  campoValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  guardar() {
    if (this.miFormulario.invalid) {
      // Si los campos no cumplen con lo requerimientos, se marcan como un error solicitando el llenado de los campos
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    // Limpia los campos del formulario, quedando a la espera para ser llenado nuevamente
    this.miFormulario.reset();
  }
}
