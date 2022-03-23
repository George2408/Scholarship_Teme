using MongoDB.Driver;
using NotesAPI.Models;
using NotesAPI.Settings;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NotesAPI.Services
{
    public class OwnerCollectionService : IOwnerCollectionService
    {
        private readonly IMongoCollection<Owner> _owners;

        public OwnerCollectionService(IMongoDBSettings mongoDBSettings)
        {
            var client = new MongoClient(mongoDBSettings.ConnectionString);
            var database = client.GetDatabase(mongoDBSettings.DatabaseName);

            _owners = database.GetCollection<Owner>(mongoDBSettings.OwnerCollectionName);
        }

        //public List<Owner> _owner = new List<Owner>{
        //    new Owner { Id = Guid.NewGuid(), Name = "Grigore" },
        //    new Owner { Id = Guid.NewGuid(), Name = "George" },
        //    new Owner { Id = Guid.NewGuid(), Name = "Alexandra" },
        //    new Owner { Id = Guid.NewGuid(), Name = "Vasile" },
        //};

        public async Task<List<Owner>> GetAll()
        {
             var result = await _owners.FindAsync(onwer => true);
            return result.ToList();
        }
       
        public async Task<bool> Create(Owner owner)
        {
            if (owner.Id == Guid.Empty)
            {
                owner.Id = Guid.NewGuid();
            }
            await _owners.InsertOneAsync(owner);
            return true;
        }
        public async Task<bool> Update(Guid id, Owner owner)
        {
            owner.Id = id;
            var result = await _owners.ReplaceOneAsync(owner => owner.Id == id, owner);

            if (result.IsAcknowledged && result.ModifiedCount == 0)
            {
                await _owners.InsertOneAsync(owner);
                return false;
            }

            return true;
        }
        public async Task<bool> Delete(Guid id)
        {
            var result = await _owners.DeleteOneAsync(owner => owner.Id == id);

            if (result.IsAcknowledged && result.DeletedCount == 0)
            {
                return false;
            }

            return true;
        }
 
        public async Task<Owner> Get(Guid id)
        {
            throw new NotImplementedException();
        }
    }
}
