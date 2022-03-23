using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NotesAPI.Models;
using NotesAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotesAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        /// <summary>
        /// Get all notes
        /// </summary>
        /// <returns></returns>

        INoteCollectionService _noteCollectionService;
        public NotesController(INoteCollectionService noteCollectionService)
        {
            _noteCollectionService = noteCollectionService ?? throw new ArgumentNullException(nameof(noteCollectionService));
        }

        [HttpGet]
        public async Task<IActionResult> GetNotes()
        {
            return Ok(await _noteCollectionService.GetAll());
        }

        [HttpGet("{id}", Name = "GetNote")]
        public async Task<IActionResult> GetNoteById(Guid id)
        {
            return Ok(await _noteCollectionService.Get(id));
        }

        [HttpGet("Owner/{ownerId}")]
        public async Task<IActionResult> GetNotesByOwnerId(Guid ownerId)
        {
            return Ok(await _noteCollectionService.GetNotesByOwnerId(ownerId));
        }

        [HttpPost]
        public async Task<IActionResult> CreateNotes([FromBody] Note note)
        {
            if (note == null)
            {
                return BadRequest("The note cannot be null.");
            }

            await _noteCollectionService.Create(note);
            //return CreatedAtRoute("GetNote", new { id = note.Id.ToString() }, note);
            return Ok("Note was adeed.");
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateNote([FromBody] Note note, Guid id)
        {
            if (note == null)
            {
                return BadRequest("Then note cannot be null.");
            }
            else if (!await _noteCollectionService.Update(id, note))
            {
                return NotFound("The note was not found.");
            }
            return Ok("The note was updated");
        }

        [HttpPut("{id}/{oId}")]
        public async Task<IActionResult> UpdateNoteByIdAndOwner([FromBody] Note note, Guid id, Guid oId)
        {
            if (note == null)
            {
                return BadRequest("Then note cannot be null.");
            }
            else if (!await _noteCollectionService.UpdateNotesByIdAndOwner(note, id, oId))
            {
                return NotFound("The note was not found.");
            }
            return Ok("The note was updated");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNote(Guid id)
        {
            if (!await _noteCollectionService.Delete(id))
            {
                return NotFound("The note was not found.");
            }
            
                return Ok("The note was deleted.");
            
        }

        [HttpDelete("{id}/{oId}")]
        public async Task<IActionResult> DeleteNoteByIdAndOwnew(Guid id, Guid oId)
        {
            if (!await _noteCollectionService.DeleteNoteByIdAndOwner(id, oId))
            {
                return NotFound("The note was not found.");
            }
            else
            {
                return Ok("The note was deleted.");
            }

        }

        [HttpDelete("Owner/{oId}")]
        public async Task<IActionResult> DeleteNotesByOwner(Guid oId)
        {
            if (!await _noteCollectionService.DeleteNoteByOwner(oId) )
            {
                return NotFound("The owner was not found.");
            }
            else
            {
                return Ok("The note was deleted.");
            }

        }

    }

}

