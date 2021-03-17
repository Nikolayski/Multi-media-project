

using System.Collections.Generic;
using System.Threading.Tasks;
using ViewModels;

namespace Services
{
    public interface ICarsService
    {
        Task Add(CarViewModel carModel, string userId);
        Task<IEnumerable<CarsAllViewModel>> GetCars();
        Task<int> AddRateUp(string carId);
        Task<int> AddRateDown(string carId);
        Task<IEnumerable<int>> GetRating(string id);
    }
}
