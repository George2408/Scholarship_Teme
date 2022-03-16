import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModuleModule } from '../share-module/share-module.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';




@NgModule({
  declarations: [
    BookComponent,
    AddBookComponent,
  ],
  imports: [
    CommonModule,
    ShareModuleModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    BookComponent,
    AddBookComponent,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class BooksModule { }
