import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notes-app';
  text = "TesT";
  dateTest: Date = new Date(6,6,2022);
  myValueNumber: number = 6;
}
