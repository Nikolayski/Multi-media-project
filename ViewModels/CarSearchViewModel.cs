namespace ViewModels
{
    public class CarSearchViewModel
    {
        public string Manufacturer { get; set; }

        public decimal? PriceFrom { get; set; }
        public decimal? PriceTo { get; set; }

        public int? YearFrom { get; set; }
        public int? YearTo { get; set; }
    }
}
