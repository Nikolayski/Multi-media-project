using System.Collections.Generic;
using System.Threading.Tasks;
using ViewModels;

namespace Services.CommentService
{
    public interface ICommentService
    {
        Task CreateCarComment(CommentAddViewModel commentModel);
        Task<IEnumerable<CommentAllViewModel>> GetCarCommentsById(string id);
        Task CreateBlogComment(BlogAddViewModel commentModel);
        Task<IEnumerable<CommentAllViewModel>> GetBlogCommentsById(string id);
    }
}
