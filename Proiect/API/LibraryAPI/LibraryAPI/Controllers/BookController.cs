﻿using LibraryAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace LibraryAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        static List<Book> _books = new List<Book>
        {
            new Book { BookId =  Guid.NewGuid(), Author = "Sven Hassel", Title = "Legion of the Damned", DateOfPublication = new DateTime(1953, 1, 1), Description ="Legion of the Damned (original Danish title: Fordømtes Legion) is the first in a series of fourteen World War II novels by Danish-born author Sven Hassel. The book covers a chronological period of a number of years, starting with the protagonist's arrest and time in German concentration camps, and ending with his being an officer and company commander on the Russian front. All of Sven Hassel's subsequent war stories, from a chronological point of view, fill in details omitted by this book." },
            new Book { BookId =  Guid.NewGuid(), Author = "Sven Hassel", Title = "General SS", DateOfPublication = new DateTime(1960, 1, 1), Description ="Written in the first person, SS-General is based on the adventures of a group of German penal battalion soldiers in the Battle of Stalingrad. The book describes their escape from the Stalingrad siege under the leadership of a fanatical Brigadeführer of the Waffen-SS. Like all Sven Hassel's books it contains graphic descriptions of war's brutality, as well as elements of military humor." },
            new Book { BookId =  Guid.NewGuid(), Author = "Mihai Eminescu", Title = "Luceafarul", DateOfPublication = new DateTime(1883, 1, 1), Description = "Luceafărul (originally spelled Luceafĕrul pronunciation: [lutʃe̯afərul]; variously rendered as The Morning Star, The Evening Star, The Vesper, The Daystar, or Lucifer) is a narrative poem by Romanian author Mihai Eminescu. It was first published in 1883, out of Vienna, by Romanian expatriates in Austria-Hungary. It is generally considered Eminescu's masterpiece, one of the greatest accomplishments in Romanian literature, and one of the last milestones in Europe's romantic poetry."},
            new Book { BookId =  Guid.NewGuid(), Author = "Tudor Arghezi", Title = "Flori de Mucigai", DateOfPublication = new DateTime(1931, 1, 1), Description ="Flori de mucigai is the poetic volume written by Tudor Arghezi between 1918–1919, when he was imprisoned together with 11 journalists and writers, at the Văcărești penitentiary, accused of treason, because he had collaborated with the German occupation authorities. The volume was published in 1931, after the volume Matched Words." },
            new Book { BookId =  Guid.NewGuid(), Author = "William Shakespeare", Title = "Romeo and Juliet", DateOfPublication = new DateTime(1597, 1, 1), Description = "Romeo and Juliet is a tragedy written by William Shakespeare early in his career about two young Italian star-crossed lovers whose deaths ultimately reconcile their feuding families. It was among Shakespeare's most popular plays during his lifetime and, along with Hamlet, is one of his most frequently performed plays. Today, the title characters are regarded as archetypal young lovers." }
        };

        [HttpGet]
        public IActionResult GetBooks()
        {
            return Ok(_books);
        }

        [HttpGet("{id}")]
        public IActionResult GetBookById(string id)
        {
            var book = new Book();
            foreach(var e in _books)
            {
                if(e.BookId.ToString().ToLower() == id.ToLower())
                {
                    book = e;
                    break;
                }
            }
            return Ok(book);
        }

        [HttpGet("Author/{authorName}")]
        public IActionResult GetBookByAuthor(string authorName)
        {
            var book = new Book();
            foreach (var e in _books)
            {
                if (e.Author.ToString().ToLower() == authorName.ToLower())
                {
                    book = e;
                    break;
                }
            }
            return Ok(book);
        }

        [HttpPost]
        public IActionResult AddBook([FromBody] Book book )
        {
            _books.Add(book);
            return Ok("The new book was added");
        }
    }
}