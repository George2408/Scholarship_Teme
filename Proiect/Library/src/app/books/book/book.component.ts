import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/interfaces/books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
