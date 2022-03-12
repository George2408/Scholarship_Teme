import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModuleModule } from '../share-module/share-module.module';

import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';



@NgModule({
  declarations: [
    BookComponent,
    AddBookComponent
  ],
  imports: [
    CommonModule,
    ShareModuleModule
  ],
  exports: [
    BookComponent]
})
export class BooksModule { }
