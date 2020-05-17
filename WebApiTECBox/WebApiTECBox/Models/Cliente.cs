using System.ComponentModel.DataAnnotations;

namespace WebApiTECBox.Models
{
    public class Cliente
    {
        [Key]
        public string Cedula { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Correo { get; set; }
        public string Casillero { get; set; }
        public string TelefonoCasa{ get; set; }
        public string TelefonoCelular { get; set; }
        public string Usuario { get; set; }
        public string Password { get; set; }
        public Ubicacion Ubicacion { get; set; }







    }
}