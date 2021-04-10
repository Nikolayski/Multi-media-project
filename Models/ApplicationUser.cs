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
            this.Comments = new HashSet<Comment>();
            this.Products = new HashSet<Product>();
        }

        public virtual ICollection<Car> Cars{ get; set; }

        public virtual ICollection<Blog> Blogs{ get; set; }

        public virtual ICollection<Comment> Comments{ get; set; }

        public virtual ICollection<Product> Products { get; set; }
    }
}
