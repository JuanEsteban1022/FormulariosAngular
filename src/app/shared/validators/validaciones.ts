import { FormControl } from "@angular/forms";

export const valorPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

// Validación sincrona, personalizada
export const usuarioValido = (control: FormControl) => {
  const valor = control.value?.trim().toLowerCase();
  console.log(valor);
  if (valor === 'layout') {
    return {
      layout: true,
    };
  }
  return null;
}