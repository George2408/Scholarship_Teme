import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view/list-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { AuthorComponent } from './author/author.component';



@NgModule({
  declarations: [
    ListViewComponent,
    DetailViewComponent,
    AuthorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthorsModule { }
