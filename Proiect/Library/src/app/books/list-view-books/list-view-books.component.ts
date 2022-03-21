import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/interfaces/books';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-view-books',
  templateUrl: './list-view-books.component.html',
  styleUrls: ['./list-view-books.component.scss']
})
export class ListViewBooksComponent implements OnInit {

  books: Books[];
  displayedColumns: string[];

  constructor(private _service:DataService ) { }

  ngOnInit(): void {
    this._service.getBooksData().subscribe((books:Books[]) => this.books = books);
    this.displayedColumns = ['image', 'title', 'author', 'dateOfPublication'];
  }

}
