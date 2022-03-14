import { Injectable } from '@angular/core';
import { Category } from '../category';
import { Note } from '../note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes:Note[] = [
    {
      id:'1',
      title:"First note",
      description:"This is the description for the first note",
      categoryId:'1'
    },
    {
      id:'2',
      title:"Second note",
      description:"This is the description for the second note",
      categoryId:'2'
    },
    {
      id:'3',
      title:"Third note",
      description:"This is the description for the third note",
      categoryId:'3'
    }
  ]

  categories:Category[] = [
    {name:'To Do', id:'1'},
    {name:'Done', id:'2'},
    {name:'Doing', id:'3'}
    ]

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

  getFiltredNotes(categoryId: string)
  {
  //   return this.notes.filter((note) => { note.categoryId === categoryId })
    return this.notes.filter( note => note.categoryId === categoryId)
}

  getFiltredSearch(searchWord: string)
  {
    searchWord.toLowerCase()
    return this.notes.filter( note => note.title.toLowerCase().includes(searchWord) || note.description.toLocaleLowerCase().includes(searchWord))
  }

  constructor() { }
}
