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

        [HttpPut("{id}")]
        public IActionResult UpdateOwner([FromBody] Owner owner, Guid id)
        {
            if (owner == null)
            {
                return BadRequest("The owner cannot be null");
            }

            int index = _owner.FindIndex(x => x.Id == id);

            if (index == -1)
            {
                return CreateOwner(owner);
            }
            else
            {
                owner.Id = id;
                _owner[index] = owner;
            }

            return Ok(_owner);

        }

        [HttpDelete("{id}")]
        public IActionResult DeleteOwner(Guid id)
        {
            int index = _owner.FindIndex(x => x.Id == id);
            if(index == -1)
            {
                return NotFound("The owner was not found");
            }

            _owner.RemoveAt(index);

            return Ok("The owner was deleted succsefuly");
            
        }

    }
}
