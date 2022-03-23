using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NotesAPI.Models;
using NotesAPI.Services;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

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
        public async Task<IActionResult> GetOwner()
        {
            return Ok(await _ownerCollectionService.GetAll());
        }
        [HttpPost]
        public async Task<IActionResult> CreateOwner([FromBody] Owner owner)
        {
            if (owner == null)
            {
                return BadRequest("The owner cannot be null.");
            }
            await _ownerCollectionService.Create(owner);
            return Ok("The owner was added.");
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateOwner([FromBody] Owner owner, Guid id)
        {
            if(!await _ownerCollectionService.Delete(id))
            {
                return BadRequest("The owner cannot be null");
            }

            _ownerCollectionService.Update(id, owner);

            return Ok("The owner was updated.");

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOwner(Guid id)
        {
            if (!await _ownerCollectionService.Delete(id))
            {
                return NotFound("The owner was not found");
            }

            return Ok("The owner was deleted succsefuly");

        }

    }
}
