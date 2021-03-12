﻿
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
    }
}
