import { Component } from '@angular/core';
import { Object } from './object';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  test = 'ThIs my tEsT';

  categories:Object[] = [
    {name:'Esteban', countrie:'Ecuador'},
    {name:'Jose', countrie:'Salvador'},
    {name:'Maria', countrie:'Mexic'},
    {name:'Ricardo', countrie:'Brasil'},
    {name:'Julian', countrie:'Argentina'}
    ]
}
