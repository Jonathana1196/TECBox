using System.ComponentModel.DataAnnotations;

namespace WebApiTECBox.Models
{
    public class Producto
    {
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        [Key]
        public string CodigoBarras { get; set; }
        public int Precio { get; set; }
        public string Impuesto { get; set; }
        public string Descuento { get; set; }
        public string Vendedor { get; set; }

    }
}