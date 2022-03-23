using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.ComponentModel.DataAnnotations;

namespace NotesAPI.Models
{
    public class Note
    {
       public string Title { get; set; }
        //[Required(ErrorMessage = "Title Error")] public string Title { get; set; }
        public string Description { get; set; }
        public string CategoryId { get; set; }
        //[BsonId] public ObjectId Id { get; set; }
        public Guid Id { get; set; }

        public Guid? OwnerId { get; set; }
        //[Required(ErrorMessage = "OwnerId Error")] public Guid? OwnerId { get; set; }
    }
}
