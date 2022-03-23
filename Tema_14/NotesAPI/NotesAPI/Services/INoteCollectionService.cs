using MongoDB.Bson;
using NotesAPI.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NotesAPI.Services
{
    public interface INoteCollectionService : ICollectionService<Note>
    {
         Task <List<Note>> GetNotesByOwnerId(Guid ownerId);

         Task <bool> UpdateNotesByIdAndOwner(Note note, Guid id, Guid oId);

         Task <bool> DeleteNoteByIdAndOwner(Guid id, Guid oId);

         Task <bool> DeleteNoteByOwner(Guid ownerId);
    }
}
