using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
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
        

    }
}