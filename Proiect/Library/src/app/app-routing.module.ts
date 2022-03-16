import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAuthorComponent } from './authors/add-author/add-author.component';
import { ListViewComponent } from './authors/list-view/list-view.component';
import { HomePageComponent } from './home/home-page/home-page.component';

const routes: Routes =[
  { path: "", component: HomePageComponent, pathMatch:"full" },
  { path: "app-list-view/:type", component: ListViewComponent},
  { path: "app-add-author", component: AddAuthorComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
