using System.ComponentModel.DataAnnotations;

namespace WebApiTECBox.Models
{
    public class Paquete
    {
        public string Descripcion { get; set; }
        [Key]
        public string Tracking { get; set; }
        public string Estado { get; set; }
        public string FechaEntrega { get; set; }
        public string Cliente { get; set; }

    }
}