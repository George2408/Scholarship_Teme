using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NotesAPI.Models;
using NotesAPI.Services;
using System;
using System.Collections.Generic;

namespace NotesAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class OwnerController : ControllerBase
    {

        IOwnerCollectionService _ownerCollectionService;
        public OwnerController(IOwnerCollectionService ownerCollectionService)
        {
            _ownerCollectionService = ownerCollectionService ?? throw new ArgumentNullException(nameof(ownerCollectionService));
        }

        [HttpGet]
        public IActionResult GetOwner()
        {
            return Ok(_ownerCollectionService.GetAll());
        }
        [HttpPost]
        public IActionResult CreateOwner([FromBody] Owner owner)
        {
            if(owner == null)
            {
                return BadRequest("The owner cannot be null.");
            }
            _ownerCollectionService.Create(owner);
            return Ok("The owner was added.");
        }

        [HttpPut("{id}")]
        public IActionResult UpdateOwner([FromBody] Owner owner, Guid id)
        {
            if (owner == null)
            {
                return BadRequest("The owner cannot be null");
            }

            _ownerCollectionService.Update(id, owner);

            return Ok("The owner was updated.");

        }

        [HttpDelete("{id}")]
        public IActionResult DeleteOwner(Guid id)
        {
            bool pos = _ownerCollectionService.Delete(id);
            if(pos == false)
            {
                return NotFound("The owner was not found");
            }

            return Ok("The owner was deleted succsefuly");
            
        }

    }
}
