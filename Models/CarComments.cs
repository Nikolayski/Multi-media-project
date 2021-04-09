

namespace Models
{
  public  class CarComments
    {
        public int Id { get; set; }
        public string CarId { get; set; }
        public virtual Car Car { get; set; }

        public string CommentId { get; set; }
        public virtual Comment Comment { get; set; }
    }
}
