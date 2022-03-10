import { Injectable } from '@angular/core';
import { Category } from '../category';
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

  categories:Category[] = [
    {name:'To Do', id:'1'},
    {name:'Done', id:'2'},
    {name:'Doing', id:'3'}
    ]

  serviceCall() {
    console.log("Note service was called");
  }

  getFilters():Category[]{
    return this.categories;
  }

  getNotes():Note[]{
    return this.notes;
  }

  addNote(newNote:Note){

    newNote.id = this.notes[this.notes.length-1].id;
    this.notes.push(newNote);
  }

  constructor() { }
}
