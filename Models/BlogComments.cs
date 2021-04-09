using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
  public  class BlogComments
    {
        public int Id { get; set; }
        public string BlogId { get; set; }
        public virtual Blog Blog { get; set; }

        public string CommentId { get; set; }
        public virtual Comment Comment { get; set; }
    }
}
