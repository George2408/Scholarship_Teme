import { Injectable } from '@angular/core';
import { Author } from '../interfaces/author';
import { Books } from '../interfaces/books';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  readonly APIUrl = 'http://localhost:5001';

  constructor(private http: HttpClient) {}

  getAuthorsData(): Observable<Author[]> {
    return this.http.get<Author[]>(this.APIUrl + '/Author');
  }

  getAuthorById(id: string): Observable<Author> {
    return this.http.get<Author>(this.APIUrl + '/Author/' + `${id}`);
  }

  addAuthor(newAuthor: Author) {
    return this.http.post(this.APIUrl + '/Author', newAuthor, {
      responseType: 'text',
    });
  }

  getBooksData(): Observable<Books[]> {
    return this.http.get<Books[]>(this.APIUrl + '/Book');
  }

  getBookById(id: string): Observable<Books> {
    return this.http.get<Books>(this.APIUrl + 'Book/' + `${id}`);
  }

  getBooksByAuthor(id: string): Observable<Books[]> {
    return this.http.get<Books[]>(this.APIUrl + '/Book/Author/' + id);
  }

  addBook(newBook: Books) {
    return this.http.post(this.APIUrl + '/Book', newBook, {
      responseType: 'text',
    });
  }
}
