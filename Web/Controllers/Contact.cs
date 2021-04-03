using Microsoft.AspNetCore.Mvc;
using Services.ContactsService;
using System.Threading.Tasks;
using ViewModels;

namespace Web.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class Contact : ControllerBase
    {
        private readonly IContactService contactService;

        public Contact(IContactService contactService)
        {
            this.contactService = contactService;
        }

        [HttpGet("/api/[controller]/get")]

        [HttpPost("/api/[controller]/post/")]
        public async Task<IActionResult> Post(ContactAddViewModel contactModel)
        {
            ;
            if (!this.ModelState.IsValid)
            {
                return NotFound("Invalid Data");
            }
            await this.contactService.AddContactAsync(contactModel);
            

            return Ok("Done");
        }


    }
}
