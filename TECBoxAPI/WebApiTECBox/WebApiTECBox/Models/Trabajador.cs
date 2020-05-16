using System.ComponentModel.DataAnnotations;

namespace WebApiTECBox.Models
{
    public class Trabajador
    {
       [Key]
        public int Cedula { get; set; }
        
        public string Nombre { get; set; }
        
        public string FechaN { get; set; }
        
    }
}