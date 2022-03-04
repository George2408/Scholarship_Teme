import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { App2Component } from './app2/app2.component';
import { AppdummyComponent } from './appdummy/appdummy.component';
import { AComponent } from './a/a.component';
import { AbcComponent } from './abc/abc.component';
import { BComponent } from './b/b.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    App2Component,
    AppdummyComponent,
    AComponent,
    AbcComponent,
    BComponent,
    SecondComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
