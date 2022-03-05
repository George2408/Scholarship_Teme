import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from '../component1/component1.component';
import { Component2Component } from '../component2/component2.component';



@NgModule({
  declarations: [
    Component1Component,
    Component2Component
  ],
  imports: [
    CommonModule
  ],
  schemas:  [CUSTOM_ELEMENTS_SCHEMA]
})
export class DummyModule { }
