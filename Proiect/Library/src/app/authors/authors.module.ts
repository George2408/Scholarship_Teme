import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModuleModule } from '../share-module/share-module.module';

import { ListViewComponent } from '../share-module/list-view/list-view.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ListViewAuthorsComponent } from './list-view-authors/list-view-authors.component';
import { DetailAuthorComponent } from './detail-author/detail-author.component';




@NgModule({
  declarations: [
    AddAuthorComponent,
    ListViewComponent,
    ListViewAuthorsComponent,
    DetailAuthorComponent,
  ],
  imports: [
    CommonModule,
    ShareModuleModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    AddAuthorComponent,
    ListViewComponent,
    MatNativeDateModule
  ]
})
export class AuthorsModule { }
