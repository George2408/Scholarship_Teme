import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListViewComponent } from './authors/list-view/list-view.component';
import { SnackBarComponent } from './share-module/snack-bar/snack-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    SnackBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
