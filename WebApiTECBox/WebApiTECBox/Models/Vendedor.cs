using System.ComponentModel.DataAnnotations;

namespace WebApiTECBox.Models
{
    public class Vendedor
    {
        [Key]
        public string Cedula { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
    }
}