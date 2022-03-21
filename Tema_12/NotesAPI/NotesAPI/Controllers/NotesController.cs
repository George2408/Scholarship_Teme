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
        //static List<Note> _notes = new List<Note> { 
        //new Note { Id = Guid.NewGuid(), CategoryId = "1", OwnerId = Guid.NewGuid(), Title = "First Note", Description = "First Note Description" },
        //new Note { Id = Guid.NewGuid(), CategoryId = "1", OwnerId = Guid.NewGuid(), Title = "Second Note", Description = "Second Note Description" },
        //new Note { Id = Guid.NewGuid(), CategoryId = "1", OwnerId = Guid.NewGuid(), Title = "Third Note", Description = "Third Note Description" },
        //new Note { Id = Guid.NewGuid(), CategoryId = "1", OwnerId = Guid.NewGuid(), Title = "Fourth Note", Description = "Fourth Note Description" },
        //new Note { Id = Guid.NewGuid(), CategoryId = "1", OwnerId = Guid.NewGuid(), Title = "Fifth Note", Description = "Fifth Note Description" }
        //};

        private static List<Note> _notes = new List<Note> { 
        new Note { Id = new Guid("00000000-0000-0000-0000-000000000001"), CategoryId = "1", OwnerId = new Guid("00000000-0000-0000-0000-000000000004"), Title = "First Note", Description = "First Note Description" },
        new Note { Id = new Guid("00000000-0000-0000-0000-000000000002"), CategoryId = "1", OwnerId = new Guid("00000000-0000-0000-0000-000000000001"), Title = "Second Note", Description = "Second Note Description" },
        new Note { Id = new Guid("00000000-0000-0000-0000-000000000003"), CategoryId = "1", OwnerId = new Guid("00000000-0000-0000-0000-000000000003"), Title = "Third Note", Description = "Third Note Description" },
        new Note { Id = new Guid("00000000-0000-0000-0000-000000000004"), CategoryId = "1", OwnerId = new Guid("00000000-0000-0000-0000-000000000001"), Title = "Fourth Note", Description = "Fourth Note Description" },
        new Note { Id = new Guid("00000000-0000-0000-0000-000000000005"), CategoryId = "1", OwnerId = new Guid("00000000-0000-0000-0000-000000000002"), Title = "Fifth Note", Description = "Fifth Note Description" }
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

        [HttpGet("Owner/{ownerId}")]
        public IActionResult GetNotesByOwnerId(string ownerId)
        {
            var filtredList = new List<Note>();
            foreach (var note in _notes)
            {
                if (note.OwnerId.ToString().Equals(ownerId))
                {
                    filtredList.Add(note);
                }
            }
            return Ok(filtredList);
        }

        [HttpPost]
        public IActionResult CreateNotes([FromBody] Note note)
        {
           _notes.Add(note);
            //return Ok(_notes);
            return CreatedAtRoute("GetNote", new { id= note.Id.ToString() }, note);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateNote([FromBody] Note note, Guid id)
        {
            if (note == null)
            {
                return BadRequest("Note cannot be null");
            }

            int index = _notes.FindIndex(x => x.Id == id);

            if (index == -1)
            {
                //return NotFound("Note not found");
                note.Id = id;
                return CreateNotes(note);

            }
            else
            {
                note.Id = id;
                note.OwnerId = _notes[index].OwnerId;
                _notes[index] = note;
            }

            return Ok(_notes);
        }

        [HttpPut("{id}/{oId}")]
        public IActionResult UpdateNoteByIdAndOwner([FromBody] Note note, Guid id, Guid oId)
        {
            if (note == null)
            {
                return BadRequest("Note cannot be null");
            }

            int index = _notes.FindIndex(x => x.Id == id);

            if (index != -1 && _notes.FindIndex(x => x.Id == oId) != -1)
            {
                note.Id = id;
                note.OwnerId = oId;
                _notes[index] = note;
            }
            else
            {
                note.Id = id;
                note.OwnerId = oId;
                return CreateNotes(note);
            }

            return Ok(_notes);
        }


        [HttpDelete("{id}")]
        public IActionResult DeleteNote(Guid id)
        {
            int index = _notes.FindIndex(x => x.Id == id);
            if (index == -1)
            {
                return NotFound("The note was not found");
            }

            _notes.RemoveAt(index);

            return Ok("The note was deleted succsefuly");

        }

        [HttpDelete("{id}/{oId}")]
        public IActionResult DeleteNoteByIdAndOwnew(Guid id, Guid oId)
        {
            int index = _notes.FindIndex(x => x.Id == id);
            if (index == -1)
            {
                return NotFound("The note was not found");
            }

            int index2 =_notes.FindIndex(index => index.OwnerId == oId);
            //if( _notes[index2].OwnerId == oId )
            //{
            //    _notes.RemoveAt(index2);
            //}
            //else
            //{
            //    return NotFound("The note for owner was not found.");
            //}
            if (index2 == -1)
            {
                 return NotFound("The note for owner was not found.");
            }
            else
            {
                _notes.RemoveAt(index2);
            }

            return Ok("The note was deleted succsefully");

        }

        [HttpDelete("Owner/{oId}")]
        public IActionResult DeleteNotesByOwner(Guid oId)
        {
            int index = _notes.FindIndex(x => x.OwnerId == oId);
            if(index == -1)
            {
                return NotFound("The owner was not found");
            }
            
            _notes.RemoveAll(x => x.OwnerId == oId);
           

            return Ok("The notes of owner was deleted succsefuly.");
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

