namespace NotesAPI.Settings
{
    public interface IMongoDBSettings
    {
        string NoteCollectionName { get; set; }
        string OwnerCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }

    }
}
