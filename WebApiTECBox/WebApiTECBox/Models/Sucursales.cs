namespace WebApiTECBox.Models
{
    public class Sucursales
    {
       public string Nombre { get; set; }
       public string Telefono { get; set; }
       public Ubicacion Ubicacion { get; set; }
       public Trabajador Encargado { get; set; }
    }
}