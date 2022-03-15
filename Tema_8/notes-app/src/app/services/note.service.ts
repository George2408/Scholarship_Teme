import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Category } from '../category';
import { Note } from '../note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  categories: Category[] = [
    { name: 'To Do', id: '1' },
    { name: 'Done', id: '2' },
    { name: 'Doing', id: '3' },
  ];

  readonly baseUrl = 'https://localhost:4200';

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getNotes(): Observable<Note[]> {
    return this.httpClient.get<Note[]>(
      this.baseUrl + '/notes',
      this.httpOptions
    );
  }

  getFiltredNotes(categoryId: string): Observable<Note[]> {
    return this.httpClient
      .get<Note[]>(this.baseUrl + '/notes', this.httpOptions)
      .pipe(
        map((notes: Note[]) => {
          return notes.filter((note) => note.categoryId === categoryId);
        })
      );
  }

  addNote(note: Note) {
    return this.httpClient.post(
      this.baseUrl + '/notes',
      note,
      this.httpOptions
    );
  }

  updateNote(note: Note){
    return this.httpClient.put(this.baseUrl+'/notes/' + `${note.id}`, note ,this.httpOptions);
  }

  getFilters(): Category[] {
    return this.categories;
  }

  delete(id: string)
{
  // return this.httpClient.delete(`${this.baseUrl}` + '/notes/' +`${id}`);
  return this.httpClient.delete(this.baseUrl+'/notes/' + `${id}`);
}

}

//   getNotes():Note[]{
//     return this.notes;
//   }

//   addNote(newNote:Note){

//     newNote.id = this.notes[this.notes.length-1].id;
//     this.notes.push(newNote);
//   }

//   getFiltredNotes(categoryId: string)
//   {
//   //   return this.notes.filter((note) => { note.categoryId === categoryId })
//     return this.notes.filter( note => note.categoryId === categoryId)
// }

//   getFiltredSearch(searchWord: string)
//   {
//     searchWord.toLowerCase()
//     return this.notes.filter( note => note.title.toLowerCase().includes(searchWord) || note.description.toLocaleLowerCase().includes(searchWord))
//   }
