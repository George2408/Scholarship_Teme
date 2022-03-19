import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/interfaces/books';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-view-books',
  templateUrl: './list-view-books.component.html',
  styleUrls: ['./list-view-books.component.scss']
})
export class ListViewBooksComponent implements OnInit {

  Books: Books[];
  displayedColumns: string[];

  constructor(private _service:DataService ) { }

  ngOnInit(): void {
    this.Books = this._service.getBooksData();
    this.displayedColumns = ['image', 'title', 'author', 'dateOfPublication'];
  }

}
