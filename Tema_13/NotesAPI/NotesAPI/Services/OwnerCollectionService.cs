using NotesAPI.Models;
using System;
using System.Collections.Generic;

namespace NotesAPI.Services
{
    public class OwnerCollectionService : IOwnerCollectionService
    {
        public List<Owner> _owner = new List<Owner>{
            new Owner { Id = Guid.NewGuid(), Name = "Grigore" },
            new Owner { Id = Guid.NewGuid(), Name = "George" },
            new Owner { Id = Guid.NewGuid(), Name = "Alexandra" },
            new Owner { Id = Guid.NewGuid(), Name = "Vasile" },
        };

        public List<Owner> GetAll()
        {
           return _owner;
        }
       
        public bool Create(Owner owner)
        {
            _owner.Add(owner);
            return true;
        }
        public bool Update(Guid id, Owner owner)
        {
            int index = _owner.FindIndex(x => x.Id == id);

            if (index == -1)
            {
                return Create(owner);
            }
            else
            {
                owner.Id = id;
                _owner[index] = owner;
            }

            return true;
        }
        public bool Delete(Guid id)
        {
            int index = _owner.FindIndex(x => x.Id == id);
            if (index == -1)
            {
                return false;
            }
            _owner.RemoveAt(index);
            return true;
        }
 
        public Owner Get(Guid id)
        {
            throw new NotImplementedException();
        }
    }
}
