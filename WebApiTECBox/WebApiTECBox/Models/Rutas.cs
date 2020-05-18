using System.ComponentModel.DataAnnotations;

namespace WebApiTECBox.Models
{
    public class Rutas
    {
        [Key]
        public string Orden { get; set; }
        public string Distrito { get; set; }
    }
}