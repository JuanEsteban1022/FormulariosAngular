import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';

@NgModule({
  declarations: [BasicosComponent, DinamicosComponent, SwitchesComponent],
  imports: [CommonModule, ReactiveFormsModule, ReactiveRoutingModule],
})
export class ReactiveModule {
}
