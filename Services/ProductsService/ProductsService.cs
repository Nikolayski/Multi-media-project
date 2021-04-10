using Data;
using Models;
using Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ViewModels;

namespace Services.ProductsService
{
    public class ProductsService : IProductsService
    {
        private readonly ApplicationDbContext db;

        public ProductsService(ApplicationDbContext db)
        {
            this.db = db;
        }
        public async Task AddAsync(ProductAddViewModel productModel, string userId)
        {
            await this.db.Products.AddAsync(new Product
            {
                ProductType = Enum.Parse<ProductType>(productModel.ProductType, true),
                Image = productModel.Image,
                Description = productModel.Description,
                Price = productModel.Price,
                CreatorId = userId,
            });
            await this.db.SaveChangesAsync();
        }

        public async Task<ProductDetailsViewModel> GetProductById(string id)
        {
            return this.db.Products.Where(x => x.Id == id)
                        .Select(x => new ProductDetailsViewModel
                        {
                            Id = x.Id,
                            ProductType = x.ProductType.ToString(),
                            Image = x.Image,
                            Description = x.Description,
                            CreatorUsername = x.Creator.UserName,
                            Price = x.Price
                        })
                        .FirstOrDefault();
        }

        public async Task<IEnumerable<ProductAllViewModel>> GetProducts()
        {
            return this.db.Products.Select(x => new ProductAllViewModel
            {
                Id = x.Id,
                Image = x.Image,
                ProductType = x.ProductType.ToString(),
                Description = x.Description,
                CreatorUsername = x.Creator.UserName,
                Price = x.Price,
            })
                .ToList();
        }

        public async Task<IEnumerable<ProductAllViewModel>> GetProductsByType(string productType)
        {
            return this.db.Products.Where(x => x.ProductType == Enum.Parse<ProductType>(productType, true))
                                    .Select(x => new ProductAllViewModel
                                    {
                                        Id = x.Id,
                                        ProductType = x.ProductType.ToString(),
                                        Image = x.Image,
                                        Description = x.Description,
                                        Price = x.Price,
                                        CreatorUsername = x.Creator.UserName,

                                    })
                                    .ToList();
        }
    }
}
