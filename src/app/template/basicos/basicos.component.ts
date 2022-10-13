import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent implements OnInit {
  // Sirve para indicar un elemento a buscar
  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() {}

  ngOnInit(): void {}

  nombreValido(): boolean {
    this.miFormulario?.controls['precio']?.setErrors(null);
    return (
      this.miFormulario?.controls['producto']?.invalid &&
      this.miFormulario?.controls['producto']?.touched
    );
  }

  precioValido(): boolean {
    return (
      this.miFormulario?.controls['precio']?.touched &&
      this.miFormulario?.controls['precio']?.value < 0
    );
  }

  guardar() {
    //console.log(miFormulario);
    console.log('Mi formulario', this.miFormulario);
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0,
    });
  }
}
