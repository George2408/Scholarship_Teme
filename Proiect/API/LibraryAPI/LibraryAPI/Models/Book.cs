﻿using System;

namespace LibraryAPI.Models
{
    public class Book
    {
        public Guid BookId { get; set; }
        public string Author { get; set; }
        public string Title { get; set; }
        public DateTime DateOfPublication { get; set; }
        public string Description { get; set; }

    }
}