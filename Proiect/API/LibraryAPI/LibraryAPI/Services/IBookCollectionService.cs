using LibraryAPI.Models;
using System;
using System.Collections.Generic;

namespace LibraryAPI.Services
{
    public interface IBookCollectionService : ICollectionService<Book>
    {
        public List<Book> GetBooksByAuthor(Guid authorId);
    }
}
