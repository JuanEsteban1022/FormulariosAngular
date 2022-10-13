import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
})
export class SwitchesComponent {
  usuario = {
    cargo: '',
    notificaciones: false,
  };
  terminos: boolean = false;
}
