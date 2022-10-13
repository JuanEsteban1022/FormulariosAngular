import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
})
export class DinamicosComponent {
  constructor(private formBuilder: FormBuilder) {}

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    //agregar: [, [Validators.required, Validators.minLength(3)]],
    favoritos: this.formBuilder.array(
      [['JavaScript'], ['Java']],
      Validators.required
    ),
  });

  nuevoFavorito: FormControl = this.formBuilder.control(
    '',
    Validators.required
  );

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  campoValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) {
      return;
    }
    /* otro metodo de hacerlo:
    this.favoritosArr.push(this.formBuilder.control(this.nuevoFavorito.value, Validators.required));
    */
    this.favoritosArr.push(
      new FormControl(this.nuevoFavorito.value, Validators.required)
    );
    this.nuevoFavorito.reset();
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
  }

  borrar(index: number) {
    this.favoritosArr.removeAt(index);
  }
}
