using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace DogWebApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BreedsController : ControllerBase
    {
        // GET: /Breeds/?currentPage={currentPage}&pageSize={pageSize}&height={height}&weight={weight}&age={age}&family={family}
        [HttpGet]
        public string Get([FromQuery(Name = "currentPage")] int currentPage,
            [FromQuery(Name = "pageSize")] int pageSize, [FromQuery(Name = "height")] string height,
            [FromQuery(Name = "weight")] string weight, [FromQuery(Name = "age")] string age,
            [FromQuery(Name = "family")] string family)
        {
            var filteredDogs = FilterData(height, weight, age, family);
            var neededDogs = filteredDogs.Skip((currentPage - 1) * pageSize).Take(pageSize);
            return JsonSerializer.Serialize(neededDogs);
        }

        private List<DogInfo> FilterData(string height, string weight, string age, string family)
        {
            var dogs = DataSeeds.Data;
            switch (height)
            {
                case "up":
                    dogs = dogs.OrderBy(dog => dog.MinHeight).ToList();
                    break;
                case "down":
                    dogs = dogs.OrderByDescending(dog => dog.MinHeight).ToList();
                    break;
            }

            switch (weight)
            {
                case "up":
                    dogs = dogs.OrderBy(dog => dog.MinWeight).ToList();
                    break;
                case "down":
                    dogs = dogs.OrderByDescending(dog => dog.MinWeight).ToList();
                    break;
            }

            switch (age)
            {
                case "up":
                    dogs = dogs.OrderBy(dog => dog.MinLifeSpan).ToList();
                    break;
                case "down":
                    dogs = dogs.OrderByDescending(dog => dog.MinLifeSpan).ToList();
                    break;
            }

            switch (family)
            {
                case "up":
                    dogs = dogs.OrderBy(dog => dog.BreedGroup).ToList();
                    break;
                case "down":
                    dogs = dogs.OrderByDescending(dog => dog.BreedGroup).ToList();
                    break;
            }

            return dogs;
        }

        // GET: /Breeds/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            var dog = DataSeeds.ShortData.FirstOrDefault(dog => dog.Id == id);
            return JsonSerializer.Serialize(dog);
        }
    }
}