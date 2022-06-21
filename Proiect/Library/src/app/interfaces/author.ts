import { Books } from './books';
export interface Author {
  authorId: string;
  name: string;
  dateOfBirth: Date;
  description: string;
  image: string;
  books: Books[];
}
