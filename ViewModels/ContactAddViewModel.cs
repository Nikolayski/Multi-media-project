

using System.ComponentModel.DataAnnotations;

namespace ViewModels
{
 public  class ContactAddViewModel
    {
        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Country { get; set; }
        
        [Required]
        public string Description { get; set; }
    }
}
