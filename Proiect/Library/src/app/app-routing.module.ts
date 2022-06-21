import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAuthorComponent } from './authors/add-author/add-author.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { ListViewAuthorsComponent } from './authors/list-view-authors/list-view-authors.component';
import { ListViewBooksComponent } from './books/list-view-books/list-view-books.component';
import { DetailBookComponent } from './books/detail-book/detail-book.component';
import { DetailAuthorComponent } from './authors/detail-author/detail-author.component';

const routes: Routes =[
  { path: "", component: HomePageComponent, pathMatch:"full" },
  { path: "list-view-authors", component: ListViewAuthorsComponent},
  { path: "list-view-books", component: ListViewBooksComponent},
  { path: "add-author", component: AddAuthorComponent},
  { path: "add-book", component: AddBookComponent},
  { path: "detail-author/:id", component:DetailAuthorComponent },
  { path: "detail-book", component:DetailBookComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
