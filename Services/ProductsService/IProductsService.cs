

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
    }
}
