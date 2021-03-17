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
            this.Cars = new HashSet<Car>();
            this.Blogs = new HashSet<Blog>();
        }

        public virtual ICollection<Car> Cars{ get; set; }

        public virtual ICollection<Blog> Blogs{ get; set; }
    }
}
