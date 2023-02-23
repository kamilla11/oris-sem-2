using System.Text.Json;
using DogLibrary;
using Models;

namespace DogWebApi;

using DogWebApi_DataSeeds = DogWebApi.DataSeeds;

public class DataSeeds
{
    public static List<DogInfo> Data => Deserialize("convertedData.json");
    public static List<DogShortInfo> ShortData => MapToShortData();

    private static List<DogInfo?> Deserialize(string path)
    {
        string fileName = path;
        using FileStream openStream = File.OpenRead(fileName);
        List<DogInfo?>? dogs = JsonSerializer.Deserialize<List<DogInfo?>>(openStream);
        return dogs;
    }

    private static List<DogShortInfo?> MapToShortData()
    {
        return Data.Select(dog => new DogShortInfo()
        {
            Id = dog.Id,
            Name = dog.Name,
            Weight = $"{dog.MinWeight} - {dog.MaxWeight}",
            Height = $"{dog.MinHeight} - {dog.MaxHeight}",
            LifeSpan = (dog.MinLifeSpan == dog.MaxLifeSpan)
                ? $"{dog.MinLifeSpan} years"
                : $"{dog.MinLifeSpan} - {dog.MaxLifeSpan} years",
            BreedFor = dog.BredFor,
            BreedGroup = dog.BreedGroup,
            Url = dog.Url
        }).ToList();
    }
}