using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        public IActionResult PostCliente([FromBody] Cliente Cliente)
        {
            if (ModelState.IsValid)
            {
                context.Clientes.Add(Cliente);
                context.SaveChanges();
            }

            return BadRequest(ModelState);
        }
        [HttpPut("{id}")]
        public  IActionResult PutCliente([FromBody]Cliente cliente, string id)
        {
            if (cliente.Cedula != id)
            {
                return BadRequest();
            }

            context.Entry(cliente).State = EntityState.Modified;
            context.SaveChanges();
            return Ok();
        }
        
        [HttpDelete("{id}")]
        public  IActionResult DeleteCliente(string id)
        {
            var cli = context.Clientes.FirstOrDefault(x => x.Cedula == id);
            if (cli==null)
            {
                return BadRequest();
            }

            context.Clientes.Remove(cli);
            context.SaveChanges();
            return Ok(cli);
        }

    }
}