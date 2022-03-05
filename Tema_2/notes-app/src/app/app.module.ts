import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DummyModule } from './dummy/dummy.module';

@NgModule({
  declarations: [
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    DummyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
