using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Models;
using Services.BlogsService;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Security.Claims;
using System.Threading.Tasks;
using ViewModels;

namespace Web.Controllers
{
    [ApiController]
    public class Blogs : ControllerBase
    {
        private readonly IBlogService blogService;

        public Blogs(IBlogService blogService)
        {
            this.blogService = blogService;
        }

        [HttpGet("/api/[controller]/allBlogs")]
        public async Task<IEnumerable<BlogAllViewModel>> GetAll()
        {
            var user = HttpContext.User.Identity.Name;
            ;
            return await this.blogService.GetAllBlogsAsync();     
        }

        [HttpGet("/api/[controller]/{id}")]
        public async Task<BlogDetailsViewModel> GetDetails(string id)
        {
            var detailsModel = await this.blogService.GetDetailsAsync(id);
            return detailsModel;
        }

        [HttpPost("/api/[controller]/post/")]
        public async Task<IActionResult> Post(BlogViewModel blogModel)
        {
            if (!this.ModelState.IsValid)
            {
                return NotFound("Invalid data!");
            }
            await this.blogService.AddAsync(blogModel);
            return Ok("Done!");
        }
    }


}
