using LibraryAPI.Models;
using System.Collections.Generic;

namespace LibraryAPI.Services
{
    public interface IBookCollectionService : ICollectionService<Book>
    {
        public List<Book> GetBooksByAuthor(string authorName);
    }
}
