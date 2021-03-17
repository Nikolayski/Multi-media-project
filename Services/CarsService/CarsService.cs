

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

        public async Task Add(CarViewModel carModel, string userId)
        {
            await this.db.Cars.AddAsync(new Car
            {
                Manufacturer = carModel.Manufacturer,
                Model = carModel.Model,
                ImageUrl = carModel.Image,
                Year = carModel.Year,
                Price = carModel.Price,
                Contact = carModel.Contact,
                Info = carModel.Info,
                OwnerId = userId,
                RatingUp = 0,
                RatingDown = 0
            });
            await this.db.SaveChangesAsync();
        }

        public async Task<int> AddRateUp(string carId)
        {
            var wantedCar = this.db.Cars.FirstOrDefault(x => x.Id == carId);
            wantedCar.RatingUp += 1;
            await this.db.SaveChangesAsync();
            return (int)wantedCar.RatingUp;
        }

        public async Task<int> AddRateDown(string carId)
        {
            var wantedCar = this.db.Cars.FirstOrDefault(x => x.Id == carId);
            wantedCar.RatingDown += 1;
            await this.db.SaveChangesAsync();
            return (int)wantedCar.RatingDown;
        }

        public async Task<IEnumerable<CarsAllViewModel>> GetCars()
        {
            return this.db.Cars.Select(x => new CarsAllViewModel
            {
                Id = x.Id,
                Manufacturer = x.Manufacturer,
                Model = x.Model,
                Image = x.ImageUrl,
                Year = x.Year,
                Price = x.Price,
                OwnerUsername = x.Owner.UserName,
                Contact = x.Contact,
                Info = x.Info,
                RatingUp = x.RatingUp,
                RatingDown = x.RatingDown,
            })
                  .ToList();


        }

        public async Task<IEnumerable<int>> GetRating(string carId)
        {
            var ratings = new List<int>();
            var wantedCar = this.db.Cars.FirstOrDefault(x => x.Id == carId);
            ratings.Add(wantedCar.RatingUp);
            ratings.Add(wantedCar.RatingDown);
            return ratings;
        }
    }
}
