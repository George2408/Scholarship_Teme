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
  dateOfPublication = new FormControl('');
  description = new FormControl('');

  authors: Author[];

  constructor(private _service: DataService) { }

  ngOnInit(): void {
    this.authors = this._service.getAuthorsData();
  }

  clickAdd(){
    var book: Books = {
      author : this.author.value,
      title : this.title.value,
      description : this.description.value,
      dateOfPublication: this.dateOfPublication.value,
      image: this.image.value,
    };
    this._service.addBook(book);

}
}
