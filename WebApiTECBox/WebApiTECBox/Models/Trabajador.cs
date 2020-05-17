using System;
using System.ComponentModel.DataAnnotations;

namespace WebApiTECBox.Models
{
    public class Trabajador
    {
        
       [Key]
       public string Cedula { get; set; }
        
        public string Nombre { get; set; }
        
        public string Rol { get; set; }

        public string Sucursal { get; set; }
        
        public string Apellidos{ get; set; }

        public string FechaN { get; set; }
        
        public string FechaI { get; set; }
        
        public string SalarioH { get; set; }


    }
}