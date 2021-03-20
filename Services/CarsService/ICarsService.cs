

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
        Task<IEnumerable<CarsAllViewModel>> GetCarsByManunfacturer(string manufacturer);
        Task<IEnumerable<CarsAllViewModel>> GetCarsCollection(string userId);
        Task<CarsDetailsViewModel> GetDetails(string id);
        Task<bool> RemoveCarAsync(string id);
    }
}
