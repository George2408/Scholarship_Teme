import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAuthorComponent } from './authors/add-author/add-author.component';
import { ListViewComponent } from './share-module/list-view/list-view.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { DetailViewComponent } from './share-module/detail-view/detail-view.component';

const routes: Routes =[
  { path: "", component: HomePageComponent, pathMatch:"full" },
  { path: "app-list-view/:type", component: ListViewComponent},
  { path: "app-add-author", component: AddAuthorComponent},
  { path: "app-add-book", component: AddBookComponent},
  { path: "app-detail-view", component: DetailViewComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
