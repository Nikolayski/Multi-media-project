using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;

namespace Models
{
   public class ApplicationUser : IdentityUser
    {
        public ApplicationUser()
        {
            this.Id = Guid.NewGuid().ToString();
        }
    }
}
