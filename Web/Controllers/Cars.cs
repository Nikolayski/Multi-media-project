using Microsoft.AspNetCore.Mvc;
using Services;
using System.Collections.Generic;
using System.Threading.Tasks;
using ViewModels;

namespace Web.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class Cars : ControllerBase
    {
        private readonly ICarsService carsService;

        public Cars(ICarsService carsService)
        {
            this.carsService = carsService;
        }

        [HttpGet("/api/[controller]/get")]
        public async Task<IEnumerable<CarViewModel>> Get()
        {
            var cars = await this.carsService.GetCars();
            return cars;
        }


        [HttpPost("/api/[controller]/post/")]
        public async Task<IActionResult> Get(CarViewModel car)
        {
            if (!this.ModelState.IsValid)
            {
                return NotFound("Invalid data!!!");
            }
           await this.carsService.Add(car);
           return Ok("Done!!!");
        }
    }

 
}
