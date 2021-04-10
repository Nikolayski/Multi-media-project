using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ViewModels
{
  public  class ProductDetailsViewModel
    {
        public string Id { get; set; }
        public string ProductType { get; set; }

        public string Description { get; set; }

        public string Image { get; set; }

        public decimal Price { get; set; }

        public string CreatorUsername { get; set; }
    }
}
