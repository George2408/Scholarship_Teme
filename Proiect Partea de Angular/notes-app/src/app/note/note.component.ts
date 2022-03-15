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

  constructor(private service: NoteService) {

   }

  ngOnInit(): void {
    // this.notes = this.service.getNotes();
    this.getNotes();

  }

  ngOnChanges(): void{
    this.service.getFiltredNotes(this.selectedCategoryId).subscribe((notes:Note[])=> this.notes=notes)
    this.service.getFiltredSearch(this.searchWord).subscribe((notes:Note[])=> this.notes=notes)

    // console.log(this.selectedCategoryId)
    //  if(this.selectedCategoryId){
    //    this.notes = this.service.getFiltredNotes(this.selectedCategoryId)
    //  }
    //  if(this.searchWord){
    //    this.notes = this.service.getFiltredSearch(this.searchWord)
    //  }
  }

  deleteNote(note:Note){
    this.service.delete(note.id).subscribe(
      () =>{
      console.log("The note was delete", this.notes);
      this.getNotes();
    }
    );
  }


  getNotes(){
    this.service.getNotes().subscribe( (notes:Note[]) => {this.notes = notes});
  }



}
