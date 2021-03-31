

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
        Task<IEnumerable<BlogAllViewModel>> GetBlogsByTheme(string theme);
        Task<IEnumerable<BlogAllViewModel>> GetBlogsCollection(string id);
        Task<bool> RemoveCarAsync(string id);
        Task EditBlogAsync(BlogDetailsViewModel blogModel);
        Task<IEnumerable<BlogRandomCollectionViewModel>> GetRandomColection();
    }
}
