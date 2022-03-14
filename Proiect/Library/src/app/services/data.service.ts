import { Injectable } from '@angular/core';
import { Author } from '../interfaces/author';
import { Books } from '../interfaces/books';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  authors: Author[] = [
    {
      id:'1',
      name: 'William Shakespeare',
      image: 'srcappImagesAuthorsShakespear.jpg',
      dateOfBirth: '23.04.1564',
      description:
        'William Shakespeare, Shakespeare also spelled Shakspere, byname Bard of Avon or Swan of Avon, (baptized April 26, 1564, Stratford-upon-Avon, Warwickshire, England—died April 23, 1616, Stratford-upon-Avon), English poet, dramatist, and actor often called the English national poet and considered by many to be the greatest dramatist of all time.',
    },
    {
      id:'2',
      name: 'Mihai Eminescu',
      image: 'srcappImagesAuthorsShakespear.jpg',
      dateOfBirth: '15.01.1850',
      description:
        "Mihai Eminescu is one of Romania's most famous poets. He was born in 1850 and died in 1889. He is most famous for his poem 'The Prayer' which was written in 1881.",
    },
    {
      id:'3',
      name: 'Tudor Arghezi',
      image: 'src\app\Images\Authors\Arghezi.jpg',
      dateOfBirth: '21.05.1880',
      description:
        "Tudor Arghezi is one of the most appreciated Romanian writers, known for his contribution to the development of Romanian literature. Poet, prose writer and journalist, Arghezi had an extensive literary career and wrote children's literature, prose, pamphlets and theater.",
    },
    {
      id:'4',
      name: 'Sven Hassel',
      image: 'srcappImagesAuthorsShakespear.jpg',
      dateOfBirth: '19.04.1917',
      description:
        'Sven Hassel was the pen name of the Danish-born Børge Willy Redsted Pedersen (19 April 1917 ~ 21 September 2012)[ known primarily for his novels focusing on stories of German combatants during World War II. In Denmark he used the pen name Sven Hazel. Although he is arguably one of the bestselling Danish authors, possibly second only to Hans Christian Andersen',
    },
  ];
  books: Books[];


  getAuthorsData() {
    return this.authors;
  }
  addAuthor(newAuthor:Author){
    newAuthor.id = this.authors[this.authors.length-1].id;
    this.authors.push(newAuthor);
  }
  addBook(newBook:Books){

    this.books.push(newBook);
  }


  constructor() {}
}
