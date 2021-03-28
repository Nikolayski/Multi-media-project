﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ViewModels
{
 public   class CarEditViewModel
    {
        public string Id { get; set; }

        public string Model { get; set; }

        public string Image { get; set; }

        public int Year { get; set; }

        public decimal Price { get; set; }

        public int Contact { get; set; }

        public string Info { get; set; }
    }
}
