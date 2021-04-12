using Microsoft.AspNetCore.Mvc;
using Services.ProductsService;
using System.Collections.Generic;
using System.Threading.Tasks;
using ViewModels;

namespace Web.Controllers
{
    [ApiController]
    public class Products : ControllerBase
    {
        private readonly IProductsService productsService;

        public Products(IProductsService productsService)
        {
            this.productsService = productsService;
        }

        [HttpGet("/api/[controller]")]
        public async Task<IEnumerable<ProductAllViewModel>> GetProducts()
        {
            return await this.productsService.GetProducts();
        }

        [HttpGet("/api/[controller]/{id}")]
        public async Task<ProductDetailsViewModel> GetProductById(string id)
        {
            ;
            return await this.productsService.GetProductById(id);
        }

        [HttpGet("/api/[controller]/get/{productType}")]
        public async Task<IEnumerable<ProductAllViewModel>> GetProductType(string productType)
        {

            return await this.productsService.GetProductsByType(productType);
        }

        [HttpGet("/api/[controller]/my-products/{id}")]
        public async Task<IEnumerable<ProductAllViewModel>> GetProductCollection(string id)
        {
            ;
            return await  this.productsService.GetProductCollection(id);
        
        }

        [HttpPost("/api/[controller]/post/")]
        public async Task<IActionResult> CreateProduct(ProductAddViewModel productModel)
        {
            await this.productsService.AddAsync(productModel, productModel.UserId);
            return Ok("Done");
        }

        [HttpPut("/api/[controller]/edit/")]
        public async Task<IActionResult> Edit(ProductEditViewModel product)
        {
            ;
            await this.productsService.EditProductAsync(product);
            return Ok("Done");
        }


        [HttpDelete("/api/[controller]/remove/{id}")]
        public async Task<string> RemoveBlog(string id)
        {
           bool IsDeleted =  await this.productsService.RemoveBlogById(id);

            return "Done";

        }

    }
}