using System;
using System.Collections.Generic;

namespace LibraryAPI.Models
{
    public class AuthorAndHisBooks
    {
        public List<Author> Author { get; set; }
        public List<Book> Books { get; set; }
    }
}
