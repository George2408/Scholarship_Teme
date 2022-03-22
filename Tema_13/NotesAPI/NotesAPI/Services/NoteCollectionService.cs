using NotesAPI.Models;
using System;
using System.Collections.Generic;

namespace NotesAPI.Services
{
    public class NoteCollectionService : INoteCollectionService
    {
        private static List<Note> _notes = new List<Note> {
        new Note { Id = new Guid("00000000-0000-0000-0000-000000000001"), CategoryId = "1", OwnerId = new Guid("00000000-0000-0000-0000-000000000004"), Title = "First Note", Description = "First Note Description" },
        new Note { Id = new Guid("00000000-0000-0000-0000-000000000002"), CategoryId = "1", OwnerId = new Guid("00000000-0000-0000-0000-000000000001"), Title = "Second Note", Description = "Second Note Description" },
        new Note { Id = new Guid("00000000-0000-0000-0000-000000000003"), CategoryId = "1", OwnerId = new Guid("00000000-0000-0000-0000-000000000003"), Title = "Third Note", Description = "Third Note Description" },
        new Note { Id = new Guid("00000000-0000-0000-0000-000000000004"), CategoryId = "1", OwnerId = new Guid("00000000-0000-0000-0000-000000000001"), Title = "Fourth Note", Description = "Fourth Note Description" },
        new Note { Id = new Guid("00000000-0000-0000-0000-000000000005"), CategoryId = "1", OwnerId = new Guid("00000000-0000-0000-0000-000000000002"), Title = "Fifth Note", Description = "Fifth Note Description" }
        };

        public List<Note> GetAll()
        {
            return _notes;
        }
        public Note Get(Guid id)
        {
            var foundNote = new Note();
            foreach (var note in _notes)
            {
                if (note.Id == id)
                {
                    foundNote = note;
                }
            }
            return foundNote;
        }

        public List<Note> GetNotesByOwnerId(Guid ownerId)
        {
           var filtredList = new List<Note>();
            foreach (var note in _notes)
            {
                if (note.OwnerId == ownerId)
                {
                    filtredList.Add(note);
                }
            }
            return (filtredList);
        }

        public bool Create(Note note)
        {
            _notes.Add(note);
            return true;
        }

        public bool Update(Guid id, Note note)
        {
            int index = _notes.FindIndex(x => x.Id == id);

            if (index == -1)
            {
                note.Id = id;
                return Create(note);

            }
            else
            {
                note.Id = id;
                note.OwnerId = _notes[index].OwnerId;
                _notes[index] = note;
            }

            return true;
        }

        public bool UpdateNotesByIdAndOwner(Note note, Guid id, Guid oId)
        {
            if (note == null)
            {
                return false; 
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
                return Create(note);
            }

            return true;
        }

        public bool Delete(Guid id)
        {
            int index = _notes.FindIndex(x => x.Id == id);
            if (index == -1)
            {
                return false;
            }
            _notes.RemoveAt(index);
            return true;
        }

        public bool DeleteNoteByIdAndOwner(Guid id, Guid oId)
        {
            int index = _notes.FindIndex(x => x.Id == id);
            if (index == -1)
            {
                return false;
            }

            int index2 = _notes.FindIndex(index => index.OwnerId == oId);
            if (index2 == -1)
            {
                return false;
            }
            else
            {
                _notes.RemoveAt(index2);
            }

            return true;
        }

        public bool DeleteNoteByOwner(Guid oId)
        {
            int index = _notes.FindIndex(x => x.OwnerId == oId);
            if (index == -1)
            {
                return false;
            }

            _notes.RemoveAll(x => x.OwnerId == oId);

            return true;
        }
    }
}
