import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Usuario {
  nombre: string;
  favoritos: Favoritos[];
}

interface Favoritos {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
})
export class DinamicosComponent {
  // @ViewChild('miFormulario') miFormulario!: NgForm;
  nuevoLenguaje: string = '';
  usuario: Usuario = {
    nombre: 'Juan',
    favoritos: [
      { id: 1, nombre: 'Java' },
      { id: 2, nombre: 'JavaScript' },
    ],
  };
  constructor() {}

  ngOnInit(): void {}
  guardar() {
    console.log('formularo posteado');
  }

  agregarLenguaje() {
    const nuevoLenguaje: Favoritos = {
      id: this.usuario.favoritos.length + 1,
      nombre: this.nuevoLenguaje,
    };
    this.usuario.favoritos.push({ ...nuevoLenguaje });
    this.nuevoLenguaje = '';
  }

  eliminar(index: number) {
    this.usuario.favoritos.splice(index, 1);
  }
}
