import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Author } from 'src/app/interfaces/author';
import { Books } from 'src/app/interfaces/books';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.scss']
})
export class AddAuthorComponent implements OnInit {

  name = new FormControl('');
  description = new FormControl('');
  dateOfBirth = new FormControl(new Date());
  books : Books[];

  constructor(private _service: DataService) { }

  ngOnInit(): void {
  }

  clickAdd(){
    var author: Author = {
      authorId : '00000000-0000-0000-0000-000000000000',
      name : this.name.value,
      description : this.description.value,
      image : "/assets/Authors/Sven.jpg",
      dateOfBirth: this.dateOfBirth.value,
      books : this.books,
    };
    this._service.addAuthor(author).subscribe();
}
}
