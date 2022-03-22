import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Author } from 'src/app/interfaces/author';
import { Books } from 'src/app/interfaces/books';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  author = new FormControl('');
  title = new FormControl('');
  image = new FormControl('');
  dateOfPublication = new FormControl(new Date());
  description = new FormControl('');

  authors: Author[];

  

  constructor(private _service: DataService) { }

  ngOnInit(): void {
    this._service.getAuthorsData().subscribe( (Authors:Author[]) => this.authors = Authors);
  }

  clickAdd(){
    var book: Books = {
      bookId:'00000000-0000-0000-0000-000000000000',
      author : this.author.value,
      title : this.title.value,
      dateOfPublication: this.dateOfPublication.value,
      description : this.description.value,
      image: '/assets/Books/romeoAndJuliet.jpg',
    };
    this._service.addBook(book).subscribe();

}
}
