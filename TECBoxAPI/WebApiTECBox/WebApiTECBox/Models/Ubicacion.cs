using System.ComponentModel.DataAnnotations;

namespace WebApiTECBox.Models
{
    public class Ubicacion
    {
        [Key]
        public int id { get; set; }
        public string Provincia { get; set; }
        public string Canton { get; set; }
        public string Distrito { get; set; }


    }
}