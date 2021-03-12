

using Data;
using Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ViewModels;

namespace Services.CarsService
{
    public class CarsService : ICarsService
    {
        private readonly ApplicationDbContext db;

        public CarsService(ApplicationDbContext db)
        {
            this.db = db;
        }

        public async Task Add(CarViewModel carModel)
        {
            await this.db.Cars.AddAsync(new Car
            {
                Manufacturer = carModel.Manufacturer,
                Model = carModel.Model,
                ImageUrl = carModel.Image,
                Year = carModel.Year,
                Price = carModel.Price
            });
            await this.db.SaveChangesAsync();
        }

        public async Task<IEnumerable<CarViewModel>> GetCars()
        {
           return this.db.Cars.Select(x => new CarViewModel
            {

                Manufacturer = x.Manufacturer,
                Model = x.Model,
                Image = x.ImageUrl,
                Year = x.Year,
                Price = x.Price,
            })
                 .ToList();


        }
    }
}
