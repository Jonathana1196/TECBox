using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using WebApiTECBox.Models;

namespace WebApiTECBox.Controllers
{
    [Produces("application/json")]
    [Route("Clientes")]
    public class ClientesController : Controller
    {
        private readonly ApplicationDbContext context;
        
        public ClientesController(ApplicationDbContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public IEnumerable<Cliente> GetClientes()
        {
            return context.Clientes.ToList();
        }

        [HttpPost]
        public IActionResult PostCliente([FromBody]Cliente Cliente)
        {
            if (ModelState.IsValid)
            {
                context.Clientes.Add(Cliente);
                context.SaveChanges();
            }

            return BadRequest(ModelState);
        }
        

    }
}