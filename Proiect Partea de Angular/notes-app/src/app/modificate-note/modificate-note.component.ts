import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Category } from '../category';
import { Note } from '../note';
import { NoteService } from '../services/note.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificate-note',
  templateUrl: './modificate-note.component.html',
  styleUrls: ['./modificate-note.component.scss'],
})
export class ModificateNoteComponent implements OnInit {
  @Input() selectedNote: Note;

  aux: Note ;

   title = new FormControl();
   description = new FormControl();
   categId = new FormControl();
  // title = new FormControl(this.aux.tile);
  // description = new FormControl(this.aux.description);
  // categId = new FormControl(thix.aux.categId);
  categories: Category[];
  id: string;


  constructor(private _service: NoteService, private _Activatedroute:ActivatedRoute, private _router:Router) {}

  ngOnInit(): void {
    this.categories = this._service.getFilters();
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    this._service.getNote(this.id).subscribe( (note:Note) => {this.aux = note});
    console.log(this.aux)

    this.title = new FormControl(this.aux.title);
    this.description = new FormControl(this.aux.description);
    this.categId = new FormControl(this.aux.categoryId);

  }

  clickAdd() {
    const note: Note = {
      title: this.title.value,
      description: this.description.value,
      categoryId: this.categId.value,
      id: this.aux.id,
    };
    // this._service.addNote(note)
    this._service.updateNote(note).subscribe();
    this._router.navigate(['app-home']);
  }
}
