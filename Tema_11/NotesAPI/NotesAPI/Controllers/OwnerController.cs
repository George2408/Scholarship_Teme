using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NotesAPI.Models;
using System;
using System.Collections.Generic;

namespace NotesAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class OwnerController : ControllerBase
    {
        public List<Owner> _owner = new List<Owner>{
            new Owner { Id = Guid.NewGuid(), Name = "Grigore" },
            new Owner { Id = Guid.NewGuid(), Name = "George" },
            new Owner { Id = Guid.NewGuid(), Name = "Alexandra" },
            new Owner { Id = Guid.NewGuid(), Name = "Vasile" },
        };

        [HttpGet]
        public IActionResult GetOwner()
        {
            return Ok(_owner);
        }

        [HttpPost]
        public IActionResult CreateOwner([FromBody] Owner owner)
        {
            _owner.Add(owner);
            return Ok(_owner);
        }
    }
}
