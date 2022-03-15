import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Category } from '../category';
import { Note } from '../note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-modificate-note',
  templateUrl: './modificate-note.component.html',
  styleUrls: ['./modificate-note.component.scss'],
})
export class ModificateNoteComponent implements OnInit {
  @Input() selectedNote: Note;

  aux: Note = {
    id: 'id1',
    title: 'First note',
    description: 'This is the description for the first note',
    categoryId: '1',
  };

  title = new FormControl(this.aux.title);
  description = new FormControl(this.aux.description);
  categId = new FormControl(this.aux.categoryId);
  categories: Category[];

  constructor(private _service: NoteService) {}

  ngOnInit(): void {
    this.categories = this._service.getFilters();
  }

  clickAdd() {
    const note: Note = {
      title: this.title.value,
      description: this.description.value,
      categoryId: this.categId.value,
      id: aux.id
    };
    // this._service.addNote(note)
    this._service.addNote(note).subscribe();
  }
}
