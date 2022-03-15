import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModuleModule } from '../share-module/share-module.module';
import { MatCardModule } from '@angular/material/card';

import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    ShareModuleModule,
    MatCardModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class HomeModule { }
