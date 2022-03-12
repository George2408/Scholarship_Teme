import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Author } from 'src/app/interfaces/author';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.scss']
})
export class AddAuthorComponent implements OnInit {

  name = new FormControl('');
  description = new FormControl('');
  image = new FormControl('');
  dateOfBirth = new FormControl('');

  constructor(private _service: DataService) { }

  ngOnInit(): void {
  }


  clickAdd(){
    var author: Author = {
      name : this.name.value,
      description : this.description.value,
      image : this.image.value,
      dateOfBirth: this.dateOfBirth.value,
    };
    this._service.addAuthor(author);
}
}
