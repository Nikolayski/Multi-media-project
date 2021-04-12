

using System.Collections.Generic;
using System.Threading.Tasks;
using ViewModels;

namespace Services.ProductsService
{
    public interface IProductsService
    {
        Task AddAsync(ProductAddViewModel productModel, string userId);
        Task<IEnumerable<ProductAllViewModel>> GetProducts();
        Task<IEnumerable<ProductAllViewModel>> GetProductsByType(string productType);
        Task<ProductDetailsViewModel> GetProductById(string id);
        Task<IEnumerable<ProductAllViewModel>> GetProductCollection(string id);
        Task<bool> RemoveBlogById(string id);
        Task EditProductAsync(ProductEditViewModel car);
        Task<IEnumerable<ProductsRandomViewModel>> GetRandomCollection();
    }
}
