

using System.ComponentModel.DataAnnotations;

namespace ViewModels
{
  public  class BlogViewModel
    {
        [Required]
        public string Theme { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string Image { get; set; }
    }
}
