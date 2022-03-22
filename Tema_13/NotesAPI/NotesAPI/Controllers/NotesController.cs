using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NotesAPI.Models;
using NotesAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;

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
        public IActionResult GetNotes()
        {
            return Ok(_noteCollectionService.GetAll());
        }

        [HttpGet("{id}", Name = "GetNote")]
        public IActionResult GetNoteById(Guid id)
        {
            return Ok(_noteCollectionService.Get(id));
        }

        [HttpGet("Owner/{ownerId}")]
        public IActionResult GetNotesByOwnerId(Guid ownerId)
        {
            return Ok(_noteCollectionService.GetNotesByOwnerId(ownerId));
        }

        [HttpPost]
        public IActionResult CreateNotes([FromBody] Note note)
        {
            if( note == null)
            {
                return BadRequest("The note cannot be null/");
            }

           _noteCollectionService.Create(note);
            return CreatedAtRoute("GetNote", new { id= note.Id.ToString() }, note);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateNote([FromBody] Note note, Guid id)
        {
            if (note == null)
            {
                return BadRequest("Then note cannot be null>");
            }
            else
            {
                _noteCollectionService.Update(id, note);
                return Ok("The note was updated");
            }
        }

        [HttpPut("{id}/{oId}")]
        public IActionResult UpdateNoteByIdAndOwner([FromBody] Note note, Guid id, Guid oId)
        {
           if (note == null)
            {
                return BadRequest("Then note cannot be null.");
            }
            else
            {
                _noteCollectionService.Update(id, note);
                return Ok("The note was updated.");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteNote(Guid id)
        {
            bool pos = _noteCollectionService.Delete(id);
            if (pos == false)
            {
                return NotFound("The note was not found.");
            }
            else
            {
                return Ok("The note was deleted.");
            }
        }

        [HttpDelete("{id}/{oId}")]
        public IActionResult DeleteNoteByIdAndOwnew(Guid id, Guid oId)
        {
            bool pos = _noteCollectionService.DeleteNoteByIdAndOwner(id, oId);
            if (pos == false)
            {
                return NotFound("The note was not found");
            }
            else
            {
                return Ok("The note was deleted succsefully");
            }

        }

        [HttpDelete("Owner/{oId}")]
        public IActionResult DeleteNotesByOwner(Guid oId)
        {
            bool pos = _noteCollectionService.DeleteNoteByOwner(oId);
            if (pos == false)
            {
                return NotFound("The owner was not found");
            }
            else
            {
                return Ok("The notes of owner was deleted succsefuly.");
            }
            }

    }

    }

