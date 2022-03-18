using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NotesAPI.Models;
using System.Collections.Generic;
using System.Linq;

namespace NotesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        static List<Category> _categories = new List<Category> {
            new Category { Id = "1", Name = "To Do"},
            new Category { Id = "2", Name = "Done"},
            new Category { Id = "3", Name = "Doing"}
    };

        [HttpGet]
        public IActionResult GetCategories()
        {
            return Ok(_categories);
        }

        [HttpGet ("{id}")]
        public IActionResult GetCategoriesId(string id)
        {
            return Ok(id);
        }
    }
}
