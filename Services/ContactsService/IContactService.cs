

using System.Threading.Tasks;
using ViewModels;

namespace Services.ContactsService
{
    public interface IContactService
    {
        Task AddContactAsync(ContactAddViewModel contactModel);
    }
}
