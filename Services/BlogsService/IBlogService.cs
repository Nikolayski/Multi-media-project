﻿

using System.Collections.Generic;
using System.Threading.Tasks;
using ViewModels;

namespace Services.BlogsService
{
    public interface IBlogService
    {
        Task AddAsync(BlogViewModel blogModel, string userId);
        Task<IEnumerable<BlogAllViewModel>> GetAllBlogsAsync();
        Task<BlogDetailsViewModel> GetDetailsAsync(string id);
    }
}
