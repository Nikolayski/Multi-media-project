using Data;
using Models;
using Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ViewModels;

namespace Services.BlogsService
{
    public class BlogService : IBlogService
    {
        private readonly ApplicationDbContext db;

        public BlogService(ApplicationDbContext db)
        {
            this.db = db;
        }
        public async Task AddAsync(BlogViewModel blogModel, string userId)
        {

            var blog = new Blog
            {
                Theme = Enum.Parse<Theme>(blogModel.Theme, true),
                Title = blogModel.Title,
                Description = blogModel.Description,
                ImageUrl = blogModel.Image,
                CreatorId = userId
            };
            await this.db.Blogs.AddAsync(blog);
            await this.db.SaveChangesAsync();
        }

        public async Task EditBlogAsync(BlogDetailsViewModel blogModel)
        {
            var wantedBlog = this.db.Blogs.FirstOrDefault(x => x.Id == blogModel.Id);
            wantedBlog.Title = blogModel.Title;
            wantedBlog.ImageUrl = blogModel.Image;
            wantedBlog.Description = blogModel.Description;
            await this.db.SaveChangesAsync();
        }

        public async Task<IEnumerable<BlogAllViewModel>> GetAllBlogsAsync()
        {
            return this.db.Blogs.Select(x => new BlogAllViewModel
            {
                Id = x.Id,
                Theme = x.Theme.ToString(),
                Title = x.Title,
                Description = x.Description,
                Image = x.ImageUrl,
                CreatorUsername = x.Creator.UserName
            })
                .ToList();
        }

        public async Task<IEnumerable<BlogAllViewModel>> GetBlogsByTheme(string theme)
        {
            var blogs = this.db.Blogs.Where(x => x.Theme == Enum.Parse<Theme>(theme, true))
                                 .Select(x => new BlogAllViewModel
                                 {
                                     Id = x.Id,
                                     Theme = x.Theme.ToString(),
                                     Title = x.Title,
                                     Image = x.ImageUrl,
                                     CreatorUsername = x.Creator.UserName,
                                     Description = x.Description
                                 })
                                 .ToList();

            return blogs;

        }

        public async Task<IEnumerable<BlogAllViewModel>> GetBlogsCollection(string id)
        {
            return this.db.Blogs.Where(x => x.CreatorId == id)
                                .Select(x => new BlogAllViewModel
                                {
                                    Id = x.Id,
                                    Theme = x.Theme.ToString(),
                                    Title = x.Title,
                                    CreatorUsername = x.Creator.UserName,
                                    Description = x.Description,
                                    Image = x.ImageUrl
                                })
                                .ToList();
                               
        }

        public async Task<BlogDetailsViewModel> GetDetailsAsync(string id)
        {
            return this.db.Blogs.Where(x => x.Id == id)
                          .Select(x => new BlogDetailsViewModel
                          {
                              Id = x.Id,
                              Theme = x.Theme.ToString(),
                              Title = x.Title,
                              Image = x.ImageUrl,
                              Description = x.Description
                          })
                          .FirstOrDefault();

        }

        public async Task<IEnumerable<BlogRandomCollectionViewModel>> GetRandomColection()
        {
            return this.db.Blogs.Select(x => new BlogRandomCollectionViewModel
            {
                Id = x.Id,
                Theme = x.Theme.ToString(),
                Title = x.Title,
                Image = x.ImageUrl
            })
                 .ToList()
                 .TakeLast(4);
        }

        public async Task<bool> RemoveCarAsync(string id)
        {
            var wantedBlog = this.db.Blogs.FirstOrDefault(x => x.Id == id);
            this.db.Blogs.Remove(wantedBlog);
            await this.db.SaveChangesAsync();
            return !this.db.Blogs.Any(x => x.Id == id);
        }
    }
}
