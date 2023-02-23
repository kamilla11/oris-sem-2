using System.Text.Json;
using DogLibrary;
using Models;

namespace DogWebApi;

public static class DataSeeds
{
    public static List<DogInfo> Data => ConvertData();

    private static List<DogInfo> ConvertData()
    {
        var dogsFullInfo = Deserialize("data.json");
        List<DogInfo> dogsShortInfo = dogsFullInfo.Select(dog =>
        {
            var weight = dog.weight.metric.ToString().Split(" - ");
            var height = dog.height.metric.ToString().Split(" - ");
            var lifeSpan = dog.life_span.ToString().Split(" ");
            if (weight[0] == "NaN") weight[0] = "0";
            if (weight.Length > 1 && weight[1] == "NaN") weight[0] = "0";
            if (height[0] == "NaN") weight[0] = "0";
            if (height.Length > 1 && height[1] == "NaN") weight[0] = "0";
            if (lifeSpan[0] == "NaN") lifeSpan[0] = "0";
            if (lifeSpan.Length > 2 && lifeSpan[2] == "NaN") lifeSpan[2] = "0";

            return new DogInfo()
            {
                MinWeight = (weight[0] != "NaN") ? int.Parse(weight[0]) : 0,
                MaxWeight = (weight.Length == 2) ? int.Parse(weight[1]) : int.Parse(weight[0]),
                MinHeight = int.Parse(height[0]),
                MaxHeight = (height.Length == 2) ? int.Parse(height[1]) : int.Parse(height[0]),
                MinLifeSpan = int.Parse(lifeSpan[0]),
                MaxLifeSpan = (lifeSpan.Length > 2) ? int.Parse(lifeSpan[2]) : int.Parse(lifeSpan[0]),
                Id = dog!.id,
                Name = dog.name,
                BredFor = dog.bred_for,
                BreedGroup = dog.breed_group,
                Temperament = dog.temperament,
                Origin = dog.origin,
                Url = dog.image.url,
                CountryCode = dog.country_code,
                Description = dog.description,
                History = dog.history
            };
        }).ToList();
        Serialize("convertedData.json", dogsShortInfo);
        return dogsShortInfo;
    }

    private static void Serialize(string path, List<DogInfo> dogs)
    {
        string fileName = path;
        string jsonString = JsonSerializer.Serialize(dogs);
        File.WriteAllText(fileName, jsonString);
    }

    public static List<Dog?> Deserialize(string path)
    {
        string fileName = path;
        using FileStream openStream = File.OpenRead(fileName);
        List<Dog?>? dogs = JsonSerializer.Deserialize<List<Dog?>>(openStream);
        return dogs;
    }
}