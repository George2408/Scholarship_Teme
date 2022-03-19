import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModuleModule } from '../share-module/share-module.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ListViewBooksComponent } from './list-view-books/list-view-books.component';
import { DetailBookComponent } from './detail-book/detail-book.component';




@NgModule({
  declarations: [
    BookComponent,
    AddBookComponent,
    ListViewBooksComponent,
    DetailBookComponent,
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
    MatNativeDateModule,
  ]
})
export class BooksModule { }
