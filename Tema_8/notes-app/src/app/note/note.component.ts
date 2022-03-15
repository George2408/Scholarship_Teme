import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit, OnChanges {

  notes:Note[];


  @Input() selectedCategoryId: string;
  @Input() searchWord : string;
  @Output() selectedNote: Note;

  constructor(private service: NoteService) {

   }

  ngOnInit(): void {
    // this.notes = this.service.getNotes();
     this.service.getNotes().subscribe( (notes:Note[]) => {this.notes = notes});
  }

  ngOnChanges(): void{
    this.service.getFiltredNotes(this.selectedCategoryId).subscribe((notes:Note[])=> this.notes=notes)

    // console.log(this.selectedCategoryId)
    // if(this.selectedCategoryId){
    //   this.notes = this.service.getFiltredNotes(this.selectedCategoryId)
    // }
    // if(this.searchWord){
    //   this.notes = this.service.getFiltredSearch(this.searchWord)
    // }
  }

  deleteNote(note:Note){
    this.service.delete(note.id).subscribe(
      () =>console.log("The note was delete")
    );
  }

  selectedNoteF(note:Note){
    this.selectedNote = note;
  }





}