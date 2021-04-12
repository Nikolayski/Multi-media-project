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

        [HttpGet("/api/[controller]/{path}/get/{id}")]
        public async Task<IEnumerable<CommentAllViewModel>> GetCommentsId(string id, string path)
        {
            ;
            return await this.commentService.GetCommentsById(id, path);
        }

        [HttpPost("/api/[controller]/{path}/post/")]
        public async Task<IActionResult> Post(CommentAddViewModel commentModel, string path )
        {
            
            await this.commentService.CreateComment(commentModel, path);

            return Ok("DONE!");
        }
    }


}
