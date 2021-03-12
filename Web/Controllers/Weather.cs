using Microsoft.AspNetCore.Mvc;
using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace Web.Controllers
{
    [ApiController]
    public class Weather : ControllerBase
    {

        [HttpGet("/api/[controller]/{town}")]
        public async Task<IActionResult> Get(string town)
        {
            var client = new HttpClient();
            var request = new HttpRequestMessage
            {
                Method = HttpMethod.Get,
                RequestUri = new Uri($"https://community-open-weather-map.p.rapidapi.com/weather?q={town}%2C%20BG&units=metric"),
                Headers =
                 {
                     { "x-rapidapi-key", "1d8c533b7fmsh227209b12a10bfcp19ca89jsn7eab2027f369" },
                     { "x-rapidapi-host", "community-open-weather-map.p.rapidapi.com" },
                 },
            };

            using (var response =await client.SendAsync(request))
            {
                response.EnsureSuccessStatusCode();
                var body =await response.Content.ReadAsStringAsync();
                return Ok(body);
            }

        }
    }
}


//var client = new HttpClient();
//var request = new HttpRequestMessage
//{
//    Method = HttpMethod.Get,
//    RequestUri = new Uri($"https://community-open-weather-map.p.rapidapi.com/weather?q={town}%2C%20BG&units=metric"),
//    Headers =
//    {
//        { "x-rapidapi-key", "1d8c533b7fmsh227209b12a10bfcp19ca89jsn7eab2027f369" },
//        { "x-rapidapi-host", "community-open-weather-map.p.rapidapi.com" },
//    },
//};
//using (var response = await client.SendAsync(request))
//{
//    response.EnsureSuccessStatusCode();
//    var body = await response.Content.ReadAsStringAsync();
//    return Ok(body);
//}