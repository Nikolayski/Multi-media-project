using Models.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Models
{
  public  class Blog
    {
        public Blog()
        {
            this.Id = Guid.NewGuid().ToString();
        }
        public string Id { get; set; }

        public virtual Theme Theme{ get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string ImageUrl { get; set; }


    }
}