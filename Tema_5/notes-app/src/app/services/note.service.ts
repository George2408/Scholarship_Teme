import { Injectable } from '@angular/core';
import { Note } from '../note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes:Note[] = [
    {
      id:1,
      title:"First note",
      description:"This is the description for the first note"
    },
    {
      id:2,
      title:"Second note",
      description:"This is the description for the second note"
    },
    {
      id:3,
      title:"Third note",
      description:"This is the description for the third note"
    }
  ]

  serviceCall() {
    console.log("Note service was called");
  }

  getNotes():Note[]{
    return this.notes;
  }

  addNote(){

  }

  constructor() { }
}
