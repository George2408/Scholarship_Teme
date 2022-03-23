import { Injectable } from '@angular/core';
import { Author } from '../interfaces/author';
import { Books } from '../interfaces/books';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // authors: Author[] = [
  //   {
  //     authorId: '1',
  //     name: 'William Shakespeare',
  //     image: '/assets/Authors/Shakespear.jpg',
  //     dateOfBirth: new Date(1564, 4, 23),
  //     description:
  //       'William Shakespeare, Shakespeare also spelled Shakspere, byname Bard of Avon or Swan of Avon, (baptized April 26, 1564, Stratford-upon-Avon, Warwickshire, England—died April 23, 1616, Stratford-upon-Avon), English poet, dramatist, and actor often called the English national poet and considered by many to be the greatest dramatist of all time.',
  //   },
  //   {
  //     authorId: '2',
  //     name: 'Mihai Eminescu',
  //     image: '/assets/Authors/Eminescu.jpg',
  //     dateOfBirth: new Date(1850, 1, 15),
  //     description:
  //       "Mihai Eminescu is one of Romania's most famous poets. He was born in 1850 and died in 1889. He is most famous for his poem 'The Prayer' which was written in 1881.",
  //   },
  //   {
  //     authorId: '3',
  //     name: 'Tudor Arghezi',
  //     image: '/assets/Authors/Arghezi.jpg',
  //     dateOfBirth: new Date(1880, 5, 21),
  //     description:
  //       "Tudor Arghezi is one of the most appreciated Romanian writers, known for his contribution to the development of Romanian literature. Poet, prose writer and journalist, Arghezi had an extensive literary career and wrote children's literature, prose, pamphlets and theater.",
  //   },
  //   {
  //     authorId: '4',
  //     name: 'Sven Hassel',
  //     image: '/assets/Authors/Sven.jpg',
  //     dateOfBirth: new Date(1917, 4, 19),
  //     description:
  //       'Sven Hassel was the pen name of the Danish-born Børge Willy Redsted Pedersen (19 April 1917 ~ 21 September 2012)[ known primarily for his novels focusing on stories of German combatants during World War II. In Denmark he used the pen name Sven Hazel. Although he is arguably one of the bestselling Danish authors, possibly second only to Hans Christian Andersen',
  //   },
  // ];
  // books: Books[] = [
  //   {
  //     bookId: '1',
  //     author: 'Sven Hassel',
  //     title: 'Legion of the Damned',
  //     image: '/assets/Books/legion.jpg',
  //     dateOfPublication: new Date(1953, 1, 1),
  //     description:
  //       "Legion of the Damned (original Danish title: Fordømtes Legion) is the first in a series of fourteen World War II novels by Danish-born author Sven Hassel. The book covers a chronological period of a number of years, starting with the protagonist's arrest and time in German concentration camps, and ending with his being an officer and company commander on the Russian front. All of Sven Hassel's subsequent war stories, from a chronological point of view, fill in details omitted by this book.",
  //   },
  //   {
  //     bookId: '2',
  //     author: 'Sven Hassel',
  //     title: 'General SS',
  //     image: '/assets/Books/general.jpg',
  //     dateOfPublication: new Date(1960, 1, 1),
  //     description:
  //       "Written in the first person, SS-General is based on the adventures of a group of German penal battalion soldiers in the Battle of Stalingrad. The book describes their escape from the Stalingrad siege under the leadership of a fanatical Brigadeführer of the Waffen-SS. Like all Sven Hassel's books it contains graphic descriptions of war's brutality, as well as elements of military humor.",
  //   },
  //   {
  //     bookId: '3',
  //     author: 'Mihai Eminescu',
  //     title: 'Luceafarul',
  //     image: '/assets/Books/luceafarul.jpg',
  //     dateOfPublication: new Date(1883, 1, 1),
  //     description:
  //       "Luceafărul (originally spelled Luceafĕrul pronunciation: [lutʃe̯afərul]; variously rendered as The Morning Star, The Evening Star, The Vesper, The Daystar, or Lucifer) is a narrative poem by Romanian author Mihai Eminescu. It was first published in 1883, out of Vienna, by Romanian expatriates in Austria-Hungary. It is generally considered Eminescu's masterpiece, one of the greatest accomplishments in Romanian literature, and one of the last milestones in Europe's romantic poetry.",
  //   },
  //   {
  //     bookId: '4',
  //     author: 'Tudor Arghezi',
  //     title: 'Flori de Mucigai',
  //     image: '/assets/Books/floriDeMucigai.jpg',
  //     dateOfPublication: new Date(1931, 1, 1),
  //     description:
  //       'Flori de mucigai is the poetic volume written by Tudor Arghezi between 1918–1919, when he was imprisoned together with 11 journalists and writers, at the Văcărești penitentiary, accused of treason, because he had collaborated with the German occupation authorities. The volume was published in 1931, after the volume Matched Words.',
  //   },
  //   {
  //     bookId: '5',
  //     author: 'William Shakespeare',
  //     title: 'Romeo and Juliet',
  //     image: '/assets/Books/romeoAndJuliet.jpg',
  //     dateOfPublication: new Date(1597, 1, 1),
  //     description:
  //       "Romeo and Juliet is a tragedy written by William Shakespeare early in his career about two young Italian star-crossed lovers whose deaths ultimately reconcile their feuding families. It was among Shakespeare's most popular plays during his lifetime and, along with Hamlet, is one of his most frequently performed plays. Today, the title characters are regarded as archetypal young lovers.",
  //   },
  // ];
  readonly APIUrl = 'http://localhost:5001';

  constructor(private http: HttpClient) {}

  getAuthorsData(): Observable<Author[]> {
    return this.http.get<Author[]>(this.APIUrl + '/Author');
  }

  getAuthorById(id: string): Observable<Author> {
    return this.http.get<Author>(this.APIUrl + '/Author/' + `${id}`);
  }

  addAuthor(newAuthor: Author) {
    return this.http.post(this.APIUrl + '/Author', newAuthor);
  }

  getBooksData(): Observable<Books[]> {
    return this.http.get<Books[]>(this.APIUrl + '/Book');
  }

  getBookById(id: string):Observable<Books>{
    return this.http.get<Books>(this.APIUrl + 'Book/' + `${id}`);
  }

  getBooksByAuthor(id: string): Observable<Books[]> {
    return this.http.get<Books[]>(this.APIUrl + '/Book/Author/' + id);
  }

  addBook(newBook: Books) {
    return this.http.post(this.APIUrl + '/Book', newBook);
  }

  // getAuthorsData() {
  //   return this.authors;
  // }

  // getAuthorById(id: string) {
  //   return this.authors.find((x) => x.id === id);
  // }

  // getBooksByAuthor(name: string) {
  //   return this.books.filter(
  //     (book) => book.author.toLowerCase() == name.toLowerCase()
  //   );
  // }

  // addAuthor(newAuthor: Author) {
  //   newAuthor.id = this.authors[this.authors.length - 1].id;
  //   this.authors.push(newAuthor);
  // }
  // addBook(newBook: Books) {
  //   newBook.id = this.books[this.books.length - 1].id;
  //   this.books.push(newBook);
  // }
  // getBooksData() {
  //   return this.books;
  // }
}
