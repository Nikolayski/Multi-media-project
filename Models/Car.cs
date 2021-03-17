
using System;
using System.ComponentModel.DataAnnotations;

namespace Models
{
  public  class Car
    {
        public Car()
        {
            this.Id = Guid.NewGuid().ToString();
        }
        public string Id { get; set; }

        [Required]
        public string Manufacturer { get; set; }

        [Required]
        public string Model { get; set; }

        [Required]
        public string ImageUrl { get; set; }

        public int Year { get; set; }

        public decimal  Price { get; set; }

        [Required]
        public string Info { get; set; }

        public int Contact { get; set; }

        public int RatingUp { get; set; }

        public int RatingDown { get; set; }

        [Required]
        public string OwnerId { get; set; }

        public virtual ApplicationUser Owner { get; set; }
    }
}
