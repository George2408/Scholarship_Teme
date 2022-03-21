import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/interfaces/author';
import { Books } from 'src/app/interfaces/books';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss'],
})
export class DetailBookComponent implements OnInit {
  book: Books = {
    bookId: '1',
    author: 'Sven Hassel',
    title: 'Legion of the Damned',
    image: '/assets/Books/legion.jpg',
    dateOfPublication: new Date(1953, 1, 1),
    description:
      "Legion of the Damned (original Danish title: Fordømtes Legion) is the first in a series of fourteen World War II novels by Danish-born author Sven Hassel. The book covers a chronological period of a number of years, starting with the protagonist's arrest and time in German concentration camps, and ending with his being an officer and company commander on the Russian front. All of Sven Hassel's subsequent war stories, from a chronological point of view, fill in details omitted by this book.",
  };
  displayedColumns = ['image', 'title', 'author', 'dateOfPublication'];
  author: Author;
  constructor(private _service: DataService) {}

  ngOnInit(): void {

  }
}
