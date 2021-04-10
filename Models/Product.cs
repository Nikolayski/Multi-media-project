using Models.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
  public  class Product
    {
        public Product()
        {
            this.Id = Guid.NewGuid().ToString();
        }
        public string Id { get; set; }

        public ProductType ProductType{ get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string Image { get; set; }


        public string CreatorId { get; set; }
        public virtual ApplicationUser Creator { get; set; }


        public decimal Price { get; set; }
    }
}
