using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Services;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using ViewModels;

namespace Web.Controllers
{

    [ApiController]
    [Route("/api/[controller]")]
    public class Cars : ControllerBase
    {
        private readonly ICarService carsService;

        public Cars(ICarService carsService)
        {
            this.carsService = carsService;
        }

        [HttpGet("/api/[controller]")]
        public async Task<IEnumerable<CarsAllViewModel>> Get()
        {
            var cars = await this.carsService.GetCars();
            return cars;
        }

        [HttpGet("/api/[controller]/randomCollection")]
        public async Task<IEnumerable<CarRandomCollectionViewModel>> GetRandomCollection()
        {
            return await this.carsService.GetRandomCollection();
        }

        [HttpPost("/api/[controller]/search/")]
        public async Task<IEnumerable<CarsAllViewModel>> Search(CarSearchViewModel car)
        {
            var cars = await this.carsService.GetCarsBySearch(car);
            return cars;

           
        }

        [HttpGet("/api/[controller]/rup/{id}")]
        public async Task<int> GetRatingUp(string id)
        {
            return await this.carsService.AddRateUp(id);
        }

        [HttpGet("/api/[controller]/rdown/{id}")]
        public async Task<int> GetRatingDown(string id)
        {
            return await this.carsService.AddRateDown(id);
        }

        [HttpGet("/api/[controller]/rating/{id}")]
        public async Task<IEnumerable<int>> GetRating(string id)
        {
            return await this.carsService.GetRating(id);
        }

        [HttpPost("/api/[controller]/post/")]
        public async Task<IActionResult> Post(CarViewModel car)
        {
            ;
            if (!this.ModelState.IsValid)
            {
                return NotFound("Invalid data!!!");
            }
            ;
            await this.carsService.Add(car, car.UserId);
            ;
            return Ok("Done!!!");
        }

       

        [Authorize]
        [HttpPost("/api/[controller]/edit/")]
        public async Task<IActionResult> Edit(CarEditViewModel car)
        {
            await this.carsService.EditCarAsync(car);
            return Ok("Done");
        }

        [HttpGet("/api/[controller]/get/{manufacturer}")]
        public async Task<IEnumerable<CarsAllViewModel>> GetCarsByManufacturer(string manufacturer)
        {
            var cars = await this.carsService.GetCarsByManunfacturer(manufacturer);
            var user = this.User;
            return cars;
        }

        [HttpGet("/api/[controller]/my-cars/{id}")]
        public async Task<IEnumerable<CarsAllViewModel>> GetCarCollection(string id)
        {
            var carsCollection = await this.carsService.GetCarsCollection(id);
            ;
            return carsCollection;
        }

        [HttpGet("/api/[controller]/{id}")]
        public async Task<CarsDetailsViewModel> GetDetails(string id)
        {
            var res = await this.carsService.GetDetails(id);
            return res;

        }

        [HttpDelete("/api/[controller]/remove/{id}")]
        public async Task<IActionResult> RemoveCar(string id)
        {
            var IsRemoved = await this.carsService.RemoveCarAsync(id);
            if (IsRemoved)
            {
                return NotFound("Error");
            }
            else
            {
                return Ok("Done");
            }
        }
}


}
