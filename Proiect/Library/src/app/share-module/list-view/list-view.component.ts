import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from 'src/app/interfaces/author';
import { Books } from 'src/app/interfaces/books';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {
  authors: Author[];
  books: Books[];
  displayedColumns: string[];
  type: string;

  constructor(
    private _service: DataService,
    private _Activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._Activatedroute.params.subscribe((params) => {
      this.type = params['type'];
    });

    if (this.type == 'Author')
    {
      this._service.getAuthorsData().subscribe( (authors:Author[]) => this.authors = authors);
      this.displayedColumns = ['image', 'name', 'dateOfBirth'];
    }
    else if (this.type == 'Book')
    {
      this._service.getBooksData().subscribe((books:Books[]) => this.books = books);
      this.displayedColumns = ['image', 'title', 'author', 'dateOfPublication'];
    }
  }
}
