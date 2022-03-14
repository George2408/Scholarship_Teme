import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { HomeModule } from './home/home.module';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import { ShareModuleModule } from './share-module/share-module.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    HomeModule,
    AuthorsModule,
    BooksModule,
    ShareModuleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
