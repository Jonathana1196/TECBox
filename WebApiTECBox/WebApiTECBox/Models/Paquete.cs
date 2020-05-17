namespace WebApiTECBox.Models
{
    public class Paquete
    {
        public string Descripcion { get; set; }
        public string Tracking { get; set; }
        public string Estado { get; set; }
        public string FechaEntrega { get; set; }
        public Cliente Cliente { get; set; }

    }
}