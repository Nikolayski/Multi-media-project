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
        public async Task CreateComment(CommentAddViewModel commentModel, string path)
        {
            await CheckPathAndAddComment(commentModel, path);
        }




        public async Task<IEnumerable<CommentAllViewModel>> GetCommentsById(string id, string path)
        {
           return await CheckPathAndGetCommentsById(id, path);

           
        }

        private async Task<IEnumerable<CommentAllViewModel>> CheckPathAndGetCommentsById(string id, string path)
        {
            if (path == "cars")
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
            else if (path == "blogs")
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
            return this.db.ProductComments.Where(x => x.ProductId == id)
                   .Select(x => new CommentAllViewModel
                   {
                       Id = x.Comment.Id,
                       Message = x.Comment.Message,
                       CreatorUsername = x.Comment.Creator.UserName
                   })
                   .ToList();


        }

        private async Task CheckPathAndAddComment(CommentAddViewModel commentModel, string path)
        {

            if (path == "cars")
            {
                var CarComment = new Comment
                {
                    Message = commentModel.Description,
                    CreatorId = commentModel.UserId,

                };
                await this.db.Comments.AddAsync(CarComment);
                await this.db.SaveChangesAsync();
                await this.db.CarComments.AddAsync(new CarComments { CommentId = CarComment.Id, CarId = commentModel.Id });
                await this.db.SaveChangesAsync();
            }
            else if (path == "blogs")
            {
                var BlogComment = new Comment
                {
                    Message = commentModel.Description,
                    CreatorId = commentModel.UserId,

                };
                await this.db.Comments.AddAsync(BlogComment);
                await this.db.SaveChangesAsync();
                await this.db.BlogComments.AddAsync(new BlogComments { CommentId = BlogComment.Id, BlogId = commentModel.Id });
                await this.db.SaveChangesAsync();
            }
            else
            {
                var ProductComment = new Comment
                {
                    Message = commentModel.Description,
                    CreatorId = commentModel.UserId,

                };
                await this.db.Comments.AddAsync(ProductComment);
                await this.db.SaveChangesAsync();
                await this.db.ProductComments.AddAsync(new ProductsComments { CommentId = ProductComment.Id, ProductId = commentModel.Id });
                await this.db.SaveChangesAsync();
            }
        
        }


    }
}
