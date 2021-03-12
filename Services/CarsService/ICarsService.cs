

using System.Collections.Generic;
using System.Threading.Tasks;
using ViewModels;

namespace Services
{
    public interface ICarsService
    {
        Task Add(CarViewModel carModel);
        Task<IEnumerable<CarViewModel>> GetCars();
    }
}
