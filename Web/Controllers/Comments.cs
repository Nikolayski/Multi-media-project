using Microsoft.AspNetCore.Mvc;
using Services.CommentService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ViewModels;

namespace Web.Controllers
{
    [ApiController]
    public class Comments : ControllerBase
    {
        private readonly ICommentService commentService;

        public Comments(ICommentService commentService)
        {
            this.commentService = commentService;
        }

        [HttpGet("/api/[controller]/cars/get/{id}")]
        public async Task<IEnumerable<CommentAllViewModel>> GetCommentsByCarId(string id)
        {
            return await this.commentService.GetCarCommentsById(id);
        }

        [HttpGet("/api/[controller]/blogs/get/{id}")]
        public async Task<IEnumerable<CommentAllViewModel>> GetCommentsByBlogId(string id)
        {
            return await this.commentService.GetBlogCommentsById(id);
        }

        [HttpGet("/api/[controller]/products/get/{id}")]
        public async Task<IEnumerable<CommentAllViewModel>> GetCommentsByProductId(string id)
        {
            return await this.commentService.GetProductById(id);
        }

        [HttpPost("/api/[controller]/cars/post/")]
        public async Task<IActionResult> Post(CommentAddViewModel commentModel)
        {
            await this.commentService.CreateCarComment(commentModel);
            
            return Ok("DONE!");
        }

     

        [HttpPost("/api/[controller]/blogs/post/")]
        public async Task<IActionResult> Post(BlogAddViewModel commentModel)
        {
            await this.commentService.CreateBlogComment(commentModel);

            return Ok("DONE!");
        }

        [HttpPost("/api/[controller]/products/post/")]
        public async Task<IActionResult> Post(CommentProductViewModel commentModel)
        {
            await this.commentService.CreateProductComment(commentModel);

            return Ok("DONE!");
        }
    }


}
