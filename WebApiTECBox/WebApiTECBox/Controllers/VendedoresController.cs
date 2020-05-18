using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiTECBox.Models;

namespace WebApiTECBox.Controllers
{
    [Produces("application/json")]
    [Route("Vendedores")]
    public class VendedoresController : Controller
    {
        private readonly ApplicationDbContext context;
        
        public VendedoresController(ApplicationDbContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public IEnumerable<Vendedor> GetVendedores()
        {
            return context.Vendedores.ToList();
        }

        [HttpPost]
        public IActionResult PostVendedores([FromBody]Vendedor vendedor)
        {
            if (ModelState.IsValid)
            {
                context.Vendedores.Add(vendedor);
                context.SaveChanges();
            }

            return BadRequest(ModelState);
        }
        [HttpPut("{id}")]
        public  IActionResult PutVendedor([FromBody]Vendedor vendedor , string id)
        {
            if (vendedor.Cedula != id)
            {
                return BadRequest();
            }

            context.Entry(vendedor).State = EntityState.Modified;
            context.SaveChanges();
            return Ok();
        }
        
        [HttpDelete("{id}")]
        public  IActionResult DeleteVendedor(string id)
        {
            var ven = context.Vendedores.FirstOrDefault(x => x.Cedula == id);
            if (ven==null)
            {
                return BadRequest();
            }

            context.Vendedores.Remove(ven);
            context.SaveChanges();
            return Ok(ven);
        }


    }
}