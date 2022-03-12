import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {

  categoryId: string;
  selectedSearchword = new FormControl('');

  @Output() searchWord;

  constructor() { }

  ngOnInit(): void {
  }

  receiveCategory(categId: string) {
    this.categoryId = categId;
  }

  ngOnChanges(): void{
    this.searchWord = this.selectedSearchword.value;
  }

}
