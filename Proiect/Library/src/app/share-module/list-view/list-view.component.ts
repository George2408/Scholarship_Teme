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
  Authors: Author[];
  Books: Books[];
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
      this.Authors = this._service.getAuthorsData();
      this.displayedColumns = ['image', 'name', 'dateOfBirth'];
    }
    else if (this.type == 'Book')
    {
      this.Books = this._service.getBooksData();
      this.displayedColumns = ['image', 'title', 'author', 'dateOfPublication'];
    }
  }
}
