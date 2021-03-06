import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Note } from '../note';
import { NoteService } from '../services/note.service';
import { Category } from '../category';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {
  title = new FormControl('');
  description = new FormControl('');
  categories: Category[];
  category = new FormControl('');

  constructor(private _service: NoteService) {}

  ngOnInit(): void {
    this.categories = this._service.getFilters();
  }

  clickAdd() {
    const note: Note = {
      title: this.title.value,
      description: this.description.value,
      categoryId: this.category.value,
    };
    // this._service.addNote(note)
    this._service.updateNote(note).subscribe();
  }
}
