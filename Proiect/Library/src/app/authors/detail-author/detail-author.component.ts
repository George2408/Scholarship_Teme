import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookComponent } from 'src/app/books/book/book.component';
import { Author } from 'src/app/interfaces/author';
import { Books } from 'src/app/interfaces/books';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detail-author',
  templateUrl: './detail-author.component.html',
  styleUrls: ['./detail-author.component.scss'],
})
export class DetailAuthorComponent implements OnInit {
  // author: Author= {
  //   authorId: '1',
  //   name: 'William Shakespeare',
  //   image: '/assets/Authors/Shakespear.jpg',
  //   dateOfBirth: new Date(1564, 4, 23),
  //   description:
  //     'William Shakespeare, Shakespeare also spelled Shakspere, byname Bard of Avon or Swan of Avon, (baptized April 26, 1564, Stratford-upon-Avon, Warwickshire, England—died April 23, 1616, Stratford-upon-Avon), English poet, dramatist, and actor often called the English national poet and considered by many to be the greatest dramatist of all time.',
  // };
  author: Author;
  books : Books[];
  displayedColumns = ['image', 'title', 'dateOfPublication'];
  id: string;

  constructor(
    private _service: DataService,
    private _Activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._Activatedroute.params.subscribe((params) => {
      this.id = params['id'];
      // this.author = this._service.getAuthorById(this.id);
    });

    // this.books = this._service.getBooksByAuthor(this.author.name)
    this._service
      .getAuthorById(this.id)
      .subscribe((author: Author) => {(this.author = author), this.books = this.author.books});

  }
}
