using System.ComponentModel.DataAnnotations;

namespace ViewModels
{
    public class CarViewModel
    {
        [Required]
        public string Manufacturer { get; set; }

        [Required]
        public string Model { get; set; }

        [Required]
        public string Image { get; set; }

        [Required]
        public int Year { get; set; }

        [Required]
        public decimal Price { get; set; }

        public int Contact { get; set; }

        [Required]
        public string Info { get; set; }

        [Required]
        public string UserId { get; set; }

    }
}
