using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
  public  class ProductsComments
    {
        public int Id { get; set; }
        public string ProductId { get; set; }
        public virtual Product Product{ get; set; }

        public string CommentId { get; set; }
        public virtual Comment Comment { get; set; }
    }
}
