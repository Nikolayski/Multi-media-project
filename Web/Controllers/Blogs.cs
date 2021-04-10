using Microsoft.AspNetCore.Authorization;
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

        [HttpGet("/api/[controller]")]
        public async Task<IEnumerable<BlogAllViewModel>> GetAll()
        {
            return await this.blogService.GetAllBlogsAsync();     
        }

        [HttpGet("/api/[controller]/get/{theme}")]
        public async Task<IEnumerable<BlogAllViewModel>> GetThemes(string theme)
        {
            ;
            var themesBlogs =await this.blogService.GetBlogsByTheme(theme);
            ;
            var user = this.User;
            return themesBlogs;
        }

        [HttpGet("/api/[controller]/randomCollection")]
        public async Task<IEnumerable<BlogRandomCollectionViewModel>> GetRandomCollection()
        {
            return await this.blogService.GetRandomColection();
        } 

        [HttpGet("/api/[controller]/{id}")]
        public async Task<BlogDetailsViewModel> GetDetails(string id)
        {
            var detailsModel = await this.blogService.GetDetailsAsync(id);
            return detailsModel;
        }

        [HttpPut("/api/[controller]/edit/")]
        public async Task<IActionResult> Edit(BlogDetailsViewModel blogModel)
        {

            await this.blogService.EditBlogAsync(blogModel);
            return Ok("Done");

        }

        [HttpPost("/api/[controller]/post/")]
        public async Task<IActionResult> Post(BlogViewModel blogModel)
        {
            if (!this.ModelState.IsValid)
            {
                return NotFound("Invalid data!");
            }
            await this.blogService.AddAsync(blogModel, blogModel.UserId);
            return Ok("Done!");
        }

        [HttpGet("/api/[controller]/my-blogs/{id}")]
        public async Task<IEnumerable<BlogAllViewModel>> GetBlogsCollection(string id)
        {
            var blogCollection =await this.blogService.GetBlogsCollection(id);
            return blogCollection;
        }

        [HttpDelete("/api/[controller]/remove/{id}")]
        public async Task<string> RemoveBlog(string id)
        {
         bool IsDeleted =   await this.blogService.RemoveBlogAsync(id);
            ;
            if (IsDeleted)
            {
                return "Error";
            }
            else
            {
                return "Done";
              
            }
        }
    }


}
