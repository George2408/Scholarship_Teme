using LibraryAPI.Models;
using LibraryAPI.Services;
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
        IBookCollectionService _bookCollectionService;
        public BookController(IBookCollectionService bookCollectionService)
        {
            _bookCollectionService = bookCollectionService ?? throw new ArgumentNullException(nameof(bookCollectionService));
        }

        [HttpGet]
        public IActionResult GetBooks()
        {
            return Ok(_bookCollectionService.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetBookById(Guid id)
        {
            return Ok(_bookCollectionService.Get(id));
        }

        
        [HttpPost]
        public IActionResult AddBook([FromBody] Book book )
        {
            if(book == null)
            {
                return BadRequest("The book cannot be null.");
            }
            _bookCollectionService.Create(book);
            return Ok("The new book was added");
        }
    }
}
