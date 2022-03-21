import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import { ShareModuleModule } from './share-module/share-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AuthorsModule,
    BooksModule,
    ShareModuleModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
