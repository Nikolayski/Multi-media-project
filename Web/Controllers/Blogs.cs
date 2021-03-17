﻿using Microsoft.AspNetCore.Authorization;
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
            return await this.blogService.GetAllBlogsAsync();     
        }

        [HttpGet("/api/[controller]/{id}")]
        public async Task<BlogDetailsViewModel> GetDetails(string id)
        {
            var detailsModel = await this.blogService.GetDetailsAsync(id);
            return detailsModel;
        }

        [Authorize]
        [HttpPost("/api/[controller]/post/")]
        public async Task<IActionResult> Post(BlogViewModel blogModel)
        {
            var userId = this.User.FindFirst(ClaimTypes.NameIdentifier).Value;
            if (!this.ModelState.IsValid)
            {
                return NotFound("Invalid data!");
            }
            await this.blogService.AddAsync(blogModel, userId);
            return Ok("Done!");
        }
    }


}
