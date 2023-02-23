namespace Models;

public class DogInfo
{
    public int MinWeight { get; set; }
    public int MaxWeight { get; set; }
    public int MinHeight { get; set; }
    public int MaxHeight { get; set; }
    public int MinLifeSpan { get; set; }
    public int MaxLifeSpan { get; set; }
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? BredFor { get; set; }
    public string? BreedGroup { get; set; }
    public string? Temperament { get; set; }
    public string? Origin { get; set; }
    public string? Url { get; set; }
    public string? CountryCode { get; set; }
    public string? Description { get; set; }
    public string? History { get; set; }
}