using System;
using System.ComponentModel.DataAnnotations;

namespace Models
{
  public  class Contact
    {
        public Contact()
        {
            this.Id = Guid.NewGuid().ToString();
        }
        public string Id { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string Country { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Description { get; set; }
    }
}
