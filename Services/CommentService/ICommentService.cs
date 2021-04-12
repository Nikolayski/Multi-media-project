using System.Collections.Generic;
using System.Threading.Tasks;
using ViewModels;

namespace Services.CommentService
{
    public interface ICommentService
    {

        Task CreateComment(CommentAddViewModel commentModel, string path);


        Task<IEnumerable<CommentAllViewModel>> GetCommentsById(string id, string path);


    }
}
