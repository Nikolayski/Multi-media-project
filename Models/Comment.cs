using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class Comment
    {
        public Comment()
        {
            this.Id = Guid.NewGuid().ToString();
            this.CarComments = new HashSet<CarComments>();
            this.BlogComments = new HashSet<BlogComments>();
        }
        public string Id { get; set; }

        [Required]
        public string Message { get; set; }

        [Required]
        public string CreatorId { get; set; }
        public virtual ApplicationUser Creator { get; set; }


        public virtual ICollection<CarComments> CarComments{ get; set; }
        public virtual ICollection<BlogComments> BlogComments { get; set; }
    }
}
