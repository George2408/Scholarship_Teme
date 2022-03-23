using MongoDB.Driver;
using NotesAPI.Models;
using NotesAPI.Settings;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NotesAPI.Services
{
    public class NoteCollectionService : INoteCollectionService
    {
        private readonly IMongoCollection<Note> _notes;

        public NoteCollectionService(IMongoDBSettings mongoDBSettings)
        {
            var client = new MongoClient(mongoDBSettings.ConnectionString);
            var database = client.GetDatabase(mongoDBSettings.DatabaseName);

            _notes = database.GetCollection<Note>(mongoDBSettings.NoteCollectionName);
        }

        //private static List<Note> _notes = new List<Note> {
        //new Note { Id = new Guid("00000000-0000-0000-0000-000000000001"), CategoryId = "1", OwnerId = new Guid("00000000-0000-0000-0000-000000000004"), Title = "First Note", Description = "First Note Description" },
        //new Note { Id = new Guid("00000000-0000-0000-0000-000000000002"), CategoryId = "1", OwnerId = new Guid("00000000-0000-0000-0000-000000000001"), Title = "Second Note", Description = "Second Note Description" },
        //new Note { Id = new Guid("00000000-0000-0000-0000-000000000003"), CategoryId = "1", OwnerId = new Guid("00000000-0000-0000-0000-000000000003"), Title = "Third Note", Description = "Third Note Description" },
        //new Note { Id = new Guid("00000000-0000-0000-0000-000000000004"), CategoryId = "1", OwnerId = new Guid("00000000-0000-0000-0000-000000000001"), Title = "Fourth Note", Description = "Fourth Note Description" },
        //new Note { Id = new Guid("00000000-0000-0000-0000-000000000005"), CategoryId = "1", OwnerId = new Guid("00000000-0000-0000-0000-000000000002"), Title = "Fifth Note", Description = "Fifth Note Description" }
        //};

        public async Task<List<Note>> GetAll()
        {
            var result = await _notes.FindAsync(note => true);
            return result.ToList();
        }

        public async Task<Note> Get(Guid id)
        {
            return (await _notes.FindAsync(note => note.Id == id)).FirstOrDefault();
        }

        public async Task<List<Note>> GetNotesByOwnerId(Guid ownerId)
        {
            return (await _notes.FindAsync(note => note.OwnerId == ownerId)).ToList();

        }

        public async Task<bool> Create(Note note)
        {
            if (note.Id == Guid.Empty)
            {
                note.Id = Guid.NewGuid();
            }
            await _notes.InsertOneAsync(note);
            return true;
        }

        public async Task<bool> Update(Guid id, Note note)
        {
            note.Id = id;
            var result = await _notes.ReplaceOneAsync(note => note.Id == id, note);

            if(result.IsAcknowledged && result.ModifiedCount == 0 )
            {
                await _notes.InsertOneAsync(note);
                return false;
            }

            return true;
        }

        public async Task<bool> UpdateNotesByIdAndOwner(Note note, Guid id, Guid oId)
        {
            note.Id = id;
            var result = await _notes.ReplaceOneAsync(note => note.Id == id && note.OwnerId == oId, note);

            if (result.IsAcknowledged && result.ModifiedCount == 0)
            {
                await _notes.InsertOneAsync(note);
                return false;
            }

            return true;
        }

        public async Task<bool> Delete(Guid id)
        {
            var result = await _notes.DeleteOneAsync(note => note.Id == id);
            if (result.IsAcknowledged && result.DeletedCount == 0)
            {
                return false;
            }
            return true;

        }

        public async Task<bool> DeleteNoteByIdAndOwner(Guid id, Guid oId)
        {
            var result = await _notes.DeleteOneAsync(note => note.Id == id && note.OwnerId == oId);
            if (result.IsAcknowledged && result.DeletedCount == 0)
            {
                return false;
            }

            return true;
        }

        public async Task<bool> DeleteNoteByOwner(Guid ownerId)
        {
            var result = await _notes.DeleteOneAsync(note => note.OwnerId == ownerId);
            if (result.IsAcknowledged && result.DeletedCount == 0)
            {
                return false;
            }

            return true;
        }
    }
}
