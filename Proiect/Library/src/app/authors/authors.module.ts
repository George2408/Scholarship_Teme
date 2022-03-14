import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModuleModule } from '../share-module/share-module.module';

import { ListViewComponent } from './list-view/list-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { AuthorComponent } from './author/author.component';
import { AddAuthorComponent } from './add-author/add-author.component';




@NgModule({
  declarations: [
    ListViewComponent,
    DetailViewComponent,
    AuthorComponent,
    AddAuthorComponent,
  ],
  imports: [
    CommonModule,
    ShareModuleModule
  ],
  exports: [
    ListViewComponent,
    DetailViewComponent,
    AuthorComponent,
    AddAuthorComponent
  ]
})
export class AuthorsModule { }
