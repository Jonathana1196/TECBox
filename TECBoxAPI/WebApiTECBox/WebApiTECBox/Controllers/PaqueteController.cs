using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using WebApiTECBox.Models;

namespace WebApiTECBox.Controllers
{
    [Produces("application/json")]
    [Route("Paquetes")]
    public class PaquetesController : Controller
    {
        private readonly ApplicationDbContext context;
        
        public PaquetesController(ApplicationDbContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public IEnumerable<Paquete> GetPaquete()
        {
            return context.Paquetes.ToList();
        }

        [HttpPost]
        public IActionResult PostPaquete([FromBody]Paquete paquete)
        {
            if (ModelState.IsValid)
            {
                context.Paquetes.Add(paquete);
                context.SaveChanges();
            }

            return BadRequest(ModelState);
        }
        

    }
}