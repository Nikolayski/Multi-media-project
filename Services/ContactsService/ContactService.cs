using Data;
using Models;
using System.Threading.Tasks;
using ViewModels;

namespace Services.ContactsService
{
    public class ContactService : IContactService
    {
        private readonly ApplicationDbContext db;

        public ContactService(ApplicationDbContext db)
        {
            this.db = db;
        }

        public async Task AddContactAsync(ContactAddViewModel contactModel)
        {
            await this.db.Contacts.AddAsync(new Contact
            {
                FirstName = contactModel.FirstName,
                LastName = contactModel.LastName,
                Email = contactModel.Email,
                Country = contactModel.Country,
                Description = contactModel.Description
            });
            await this.db.SaveChangesAsync();
        }
    }
}
