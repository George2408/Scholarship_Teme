using System;

namespace LibraryAPI.Models
{
    public class Author
    {
        public Guid AuthorId { get; set; }
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        
    }
}
