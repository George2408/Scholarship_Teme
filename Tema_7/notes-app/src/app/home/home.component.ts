import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categoryId: string;

  @Input() selectedSearchword:string;

  @Output() searchWord:string;

  constructor() { }

  ngOnInit(): void {
  }

  receiveCategory(categId: string) {
    this.categoryId = categId;
  }

  valueChanged($event): void{
    this.searchWord = this.selectedSearchword;
  }



}
