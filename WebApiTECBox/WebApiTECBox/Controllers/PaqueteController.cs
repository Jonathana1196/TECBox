using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        [HttpPut("{id}")]
        public  IActionResult PutPaquete([FromBody]Paquete paquete, string id)
        {
            if (paquete.Tracking!= id)
            {
                return BadRequest();
            }

            context.Entry(paquete).State = EntityState.Modified;
            context.SaveChanges();
            return Ok();
        }
        
        [HttpDelete("{id}")]
        public  IActionResult DeletePaquete(string id)
        {
            var paq = context.Paquetes.FirstOrDefault(x => x.Tracking == id);
            if (paq==null)
            {
                return BadRequest();
            }

            context.Paquetes.Remove(paq);
            context.SaveChanges();
            return Ok(paq);
        }

        

    }
}