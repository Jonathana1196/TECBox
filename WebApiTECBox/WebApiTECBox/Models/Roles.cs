using System;
using System.ComponentModel.DataAnnotations;

namespace WebApiTECBox.Models
{
    public class Roles
    {
        [Key]
        public string Id { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
    }
}