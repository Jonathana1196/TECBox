using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiTECBox.Models;

namespace WebApiTECBox.Controllers
{
    [Produces("application/json")]
    [Route("Rutas")]
    public class RutasController : Controller
    {
        private readonly ApplicationDbContext context;
        
        public RutasController(ApplicationDbContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public IEnumerable<Rutas> GetRutas()
        {
            return context.Rutasrs.ToList();
        }

        [HttpPost]
        public IActionResult PostRutas([FromBody]Rutas rutas)
        {
            if (ModelState.IsValid)
            {
                context.Rutasrs.Add(rutas);
                context.SaveChanges();
            }

            return BadRequest(ModelState);
        }
        [HttpPut("{id}")]
        public  IActionResult PutRuta([FromBody]Rutas rutas , string id)
        {
            if (rutas.Orden != id)
            {
                return BadRequest();
            }

            context.Entry(rutas).State = EntityState.Modified;
            context.SaveChanges();
            return Ok();
        }
        
        [HttpDelete("{id}")]
        public  IActionResult DeleteRuta(string id)
        {
            var rut = context.Rutasrs.FirstOrDefault(x => x.Orden == id);
            if (rut==null)
            {
                return BadRequest();
            }

            context.Rutasrs.Remove(rut);
            context.SaveChanges();
            return Ok(rut);
        }

    }
}