using LibraryAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace LibraryAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AuthorController : ControllerBase
    {
        static List<Author> _authors = new List<Author>
        {
            new Author { AuthorId =  Guid.NewGuid(), Name = "Sven Hassel",  DateOfBirth = new DateTime(1960, 1, 1), Description ="'Sven Hassel was the pen name of the Danish-born Børge Willy Redsted Pedersen (19 April 1917 ~ 21 September 2012)[ known primarily for his novels focusing on stories of German combatants during World War II. In Denmark he used the pen name Sven Hazel. Although he is arguably one of the bestselling Danish authors, possibly second only to Hans Christian Andersen" },
            new Author { AuthorId =  Guid.NewGuid(), Name = "Mihai Eminescu",  DateOfBirth = new DateTime(1883, 1, 1), Description = "Mihai Eminescu is one of Romania's most famous poets. He was born in 1850 and died in 1889. He is most famous for his poem 'The Prayer' which was written in 1881."},
            new Author { AuthorId =  Guid.NewGuid(), Name = "Tudor Arghezi",  DateOfBirth = new DateTime(1931, 1, 1), Description ="Tudor Arghezi is one of the most appreciated Romanian writers, known for his contribution to the development of Romanian literature. Poet, prose writer and journalist, Arghezi had an extensive literary career and wrote children's literature, prose, pamphlets and theater." },
            new Author { AuthorId =  Guid.NewGuid(), Name = "William Shakespeare", DateOfBirth = new DateTime(1597, 1, 1), Description = "William Shakespeare, Shakespeare also spelled Shakspere, byname Bard of Avon or Swan of Avon, (baptized April 26, 1564, Stratford-upon-Avon, Warwickshire, England—died April 23, 1616, Stratford-upon-Avon), English poet, dramatist, and actor often called the English national poet and considered by many to be the greatest dramatist of all time." },
        };

        [HttpGet]
        public IActionResult GetAuthors()
        {
            return Ok(_authors);
        }

        [HttpGet("{id}")]
        public IActionResult GetBookById(string id)
        {
            var author = new Author();
            foreach (var e in _authors)
            {
                if (e.AuthorId.ToString().ToLower() == id.ToLower())
                {
                    author = e;
                    break;
                }
            }
            return Ok(author);
        }

        [HttpPost]
        public IActionResult AddBook([FromBody] Author author)
        {
            _authors.Add(author);
            return Ok("The new author was added");
        }
    }
}