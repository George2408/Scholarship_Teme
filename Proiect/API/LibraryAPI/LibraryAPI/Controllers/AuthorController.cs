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
    public class AuthorController : ControllerBase
    {
        IAuthorCollectionService _authorCollectionService;
        public AuthorController(IAuthorCollectionService authorCollectionService)
        {
            _authorCollectionService = authorCollectionService ?? throw new ArgumentNullException(nameof(authorCollectionService));
        }

        [HttpGet]
        public IActionResult GetAuthors()
        {
            return Ok(_authorCollectionService.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetAuthorById(Guid id)
        {
            return Ok(_authorCollectionService.Get(id));
        }
      
        [HttpPost]
        public IActionResult AddAuthor([FromBody] Author author)
        {
            if(author == null)
            {
                return BadRequest("The author cannot be null.");
            }
            _authorCollectionService.Create(author);
            return Ok("The author was added succesfully.");
        }
    }
}