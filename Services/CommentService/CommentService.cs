using Data;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ViewModels;

namespace Services.CommentService
{
    public class CommentService : ICommentService
    {
        private readonly ApplicationDbContext db;

        public CommentService(ApplicationDbContext db)
        {
            this.db = db;
        }

        public async Task CreateBlogComment(BlogAddViewModel commentModel)
        {
            var comment = new Comment
            {
                Message = commentModel.Description,
                CreatorId = commentModel.UserId,
            };
            await this.db.Comments.AddAsync(comment);
            await this.db.SaveChangesAsync();
            await this.db.BlogComments.AddAsync(new BlogComments { CommentId = comment.Id, BlogId = commentModel.Id });
            await this.db.SaveChangesAsync();

        }


        public async Task CreateCarComment(CommentAddViewModel commentModel)
        {
            var comment = new Comment
            {
                Message = commentModel.Description,
                CreatorId = commentModel.UserId,

            };
            await this.db.Comments.AddAsync(comment);
            await this.db.SaveChangesAsync();
            await this.db.CarComments.AddAsync(new CarComments { CommentId = comment.Id, CarId = commentModel.Id });
            await this.db.SaveChangesAsync();

        }

        public async   Task<IEnumerable<CommentAllViewModel>> GetBlogCommentsById(string id)
        {
            return this.db.BlogComments.Where(x => x.BlogId == id)
                       .Select(x => new CommentAllViewModel
                       {
                           Id = x.Comment.Id,
                           Message = x.Comment.Message,
                           CreatorUsername = x.Comment.Creator.UserName
                       })
                       .ToList();
        }

        public async Task<IEnumerable<CommentAllViewModel>> GetCarCommentsById(string id)
        {
            return this.db.CarComments.Where(x => x.CarId == id)
                        .Select(x => new CommentAllViewModel
                        {
                            Id = x.Comment.Id,
                            Message = x.Comment.Message,
                            CreatorUsername = x.Comment.Creator.UserName
                        })
                        .ToList();
        }

      
    }
}
