import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Note } from '../note';
import { NoteService } from '../services/note.service';
import { Category } from '../category';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  title = new FormControl('');
  description = new FormControl('');
  categories:Category[];

  constructor(private _service: NoteService) { }

  ngOnInit(): void {
    this.categories = this._service.getFilters();
  }

  clickAdd(){
    var note: Note;
    note.title = this.title.value;
    note.description = this.description.value;
    this._service.addNote(note);

  }

}
