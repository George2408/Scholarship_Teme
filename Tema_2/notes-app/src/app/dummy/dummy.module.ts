import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Componenta1Component } from './componenta1/componenta1.component';
import { Componenta2Component } from './componenta2/componenta2.component';



@NgModule({
  declarations: [
    Componenta1Component,
    Componenta2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Componenta1Component,
    Componenta2Component
  ]
})
export class DummyModule { }
