using NotesAPI.Models;
using System;
using System.Collections.Generic;

namespace NotesAPI.Services
{
    public interface INoteCollectionService : ICollectionService<Note>
    {
        List<Note> GetNotesByOwnerId(Guid ownerId);

        bool UpdateNotesByIdAndOwner(Note note, Guid id, Guid oId);

        bool DeleteNoteByIdAndOwner(Guid id, Guid oId);

        bool DeleteNoteByOwner(Guid ownerId);
    }
}
