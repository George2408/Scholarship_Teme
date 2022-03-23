using LibraryAPI.Models;
using System;
using System.Collections.Generic;

namespace LibraryAPI.Services
{
    public class BookCollectionService : IBookCollectionService
    {
        static List<Book> _books = new List<Book>
        {
            new Book { Image =" /assets/Books/legion.jpg", BookId = new Guid("00000000-0000-0000-0000-000000000001"), Author = "Sven Hassel",AuthorId = new Guid("00000000-0000-0000-0000-000000000001"), Title = "Legion of the Damned", DateOfPublication = new DateTime(1953, 1, 1), Description ="Legion of the Damned (original Danish title: Fordømtes Legion) is the first in a series of fourteen World War II novels by Danish-born author Sven Hassel. The book covers a chronological period of a number of years, starting with the protagonist's arrest and time in German concentration camps, and ending with his being an officer and company commander on the Russian front. All of Sven Hassel's subsequent war stories, from a chronological point of view, fill in details omitted by this book." },
            new Book { Image ="/assets/Books/general.jpg ", BookId = new Guid("00000000-0000-0000-0000-000000000001"), Author = "Sven Hassel",AuthorId = new Guid("00000000-0000-0000-0000-000000000001"), Title = "General SS", DateOfPublication = new DateTime(1960, 1, 1), Description ="Written in the first person, SS-General is based on the adventures of a group of German penal battalion soldiers in the Battle of Stalingrad. The book describes their escape from the Stalingrad siege under the leadership of a fanatical Brigadeführer of the Waffen-SS. Like all Sven Hassel's books it contains graphic descriptions of war's brutality, as well as elements of military humor." },
            new Book { Image ="/assets/Books/luceafarul.jpg ", BookId = new Guid("00000000-0000-0000-0000-000000000003"), Author = "Mihai Eminescu",AuthorId = new Guid("00000000-0000-0000-0000-000000000002"), Title = "Luceafarul", DateOfPublication = new DateTime(1883, 1, 1), Description = "Luceafărul (originally spelled Luceafĕrul pronunciation: [lutʃe̯afərul]; variously rendered as The Morning Star, The Evening Star, The Vesper, The Daystar, or Lucifer) is a narrative poem by Romanian author Mihai Eminescu. It was first published in 1883, out of Vienna, by Romanian expatriates in Austria-Hungary. It is generally considered Eminescu's masterpiece, one of the greatest accomplishments in Romanian literature, and one of the last milestones in Europe's romantic poetry."},
            new Book { Image =" /assets/Books/floriDeMucigai.jpg", BookId = new Guid("00000000-0000-0000-0000-000000000004"), Author = "Tudor Arghezi",AuthorId = new Guid("00000000-0000-0000-0000-000000000003"), Title = "Flori de Mucigai", DateOfPublication = new DateTime(1931, 1, 1), Description ="Flori de mucigai is the poetic volume written by Tudor Arghezi between 1918–1919, when he was imprisoned together with 11 journalists and writers, at the Văcărești penitentiary, accused of treason, because he had collaborated with the German occupation authorities. The volume was published in 1931, after the volume Matched Words." },
            new Book { Image ="/assets/Books/romeoAndJuliet.jpg ", BookId = new Guid("00000000-0000-0000-0000-000000000005"), Author = "William Shakespeare",AuthorId = new Guid("00000000-0000-0000-0000-000000000004"), Title = "Romeo and Juliet", DateOfPublication = new DateTime(1597, 1, 1), Description = "Romeo and Juliet is a tragedy written by William Shakespeare early in his career about two young Italian star-crossed lovers whose deaths ultimately reconcile their feuding families. It was among Shakespeare's most popular plays during his lifetime and, along with Hamlet, is one of his most frequently performed plays. Today, the title characters are regarded as archetypal young lovers." }
        };
        public List<Book> GetAll()
        {
            return _books;
        }
        public Book Get(Guid id)
        {
            var book = new Book();
            foreach (var e in _books)
            {
                if (e.BookId == id)
                {
                    book = e;
                    break;
                }
            }
            return book;
        }

        public List<Book> GetBooksByAuthor(Guid authorId)
        {


            var filtredBooks = new List<Book>();
            foreach (var e in _books)
            {
                if (e.AuthorId == authorId)
                {
                    filtredBooks.Add(e);
                }
            }

            return filtredBooks;
        }

        public bool Create(Book book)
        {
            book.BookId = new System.Guid();
            _books.Add(book);
            return true;
        }
        public bool Update(Guid id, Book book)
        {
            throw new NotImplementedException();
        }
        public bool Delete(Guid id)
        {
            throw new NotImplementedException();
        }
    }
}

