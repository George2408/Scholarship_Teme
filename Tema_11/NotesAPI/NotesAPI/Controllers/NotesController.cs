using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NotesAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace NotesAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        static List<Note> _notes = new List<Note> { 
        new Note { Id = Guid.NewGuid(), CategoryId = "1", OwnerId = Guid.NewGuid(), Title = "First Note", Description = "First Note Description" },
        new Note { Id = Guid.NewGuid(), CategoryId = "1", OwnerId = Guid.NewGuid(), Title = "Second Note", Description = "Second Note Description" },
        new Note { Id = Guid.NewGuid(), CategoryId = "1", OwnerId = Guid.NewGuid(), Title = "Third Note", Description = "Third Note Description" },
        new Note { Id = Guid.NewGuid(), CategoryId = "1", OwnerId = Guid.NewGuid(), Title = "Fourth Note", Description = "Fourth Note Description" },
        new Note { Id = Guid.NewGuid(), CategoryId = "1", OwnerId = Guid.NewGuid(), Title = "Fifth Note", Description = "Fifth Note Description" }
        };


        /// <summary>
        /// Get all notes
        /// </summary>
        /// <returns></returns>

        [HttpGet]
        public IActionResult GetNotes()
        {
            return Ok(_notes);
        }

        
        [HttpPost]
        public IActionResult CreateNotes([FromBody] Note note)
        {
           _notes.Add(note);
            //return Ok(_notes);
            return CreatedAtRoute("GetNote", new { id= note.Id.ToString() }, note);
        }

        [HttpGet("Owner/{ownerId}")]
        public IActionResult GetNotesByOwnerId( string ownerId)
        {
            var filtredList = new List<Note>();
            foreach(var note in _notes)
            {
                if(note.OwnerId.ToString().Equals(ownerId))
                {
                    filtredList.Add(note);
                }
            }
            return Ok(filtredList);
        }

        [HttpGet("{id}", Name = "GetNote")]
        public IActionResult GetNoteById(string id)
        {
            var foundNote = new Note();
            foreach (var note in _notes)
            {
                if (note.Id.ToString().Equals(id))
                {
                   foundNote = note;
                }
            }
            return Ok(foundNote);
        }

        //[HttpGet]
        //public ActionResult<List<Note>> Get() =>
        //    _notes.Get();

        //[HttpGet("{id}")]
        //public ActionResult<Note> Get(string id)
        //{
        //    var note = _notes.Get(id);

        //    if (note == null)
        //    {
        //        return NotFound();
        //    }

        //    return note;
        //}


    }


}

