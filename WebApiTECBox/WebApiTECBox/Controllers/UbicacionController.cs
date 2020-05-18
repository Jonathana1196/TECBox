using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiTECBox.Models;

namespace WebApiTECBox.Controllers
{
    [Produces("application/json")]
    [Route("Ubicaciones")]
    public class UbicacionController : Controller
    {
        private readonly ApplicationDbContext context;
        
        public UbicacionController(ApplicationDbContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public IEnumerable<Ubicacion> GetUbicaciones()
        {
            return context.Ubicaciones.ToList();
        }

        [HttpPost]
        public IActionResult PostUbicacion([FromBody]Ubicacion ubicacion)
        {
            if (ModelState.IsValid)
            {
                context.Ubicaciones.Add(ubicacion);
                context.SaveChanges();
            }

            return BadRequest(ModelState);
        }
        [HttpPut("{id}")]
        public  IActionResult PutUbicacion([FromBody]Ubicacion ubicacion, string id)
        {
            if (ubicacion.id != id)
            {
                return BadRequest();
            }

            context.Entry(ubicacion).State = EntityState.Modified;
            context.SaveChanges();
            return Ok();
        }
        
        [HttpDelete("{id}")]
        public  IActionResult DeleteUbicacion(string id)
        {
            var ubi = context.Ubicaciones.FirstOrDefault(x => x.id == id);
            if (ubi==null)
            {
                return BadRequest();
            }

            context.Ubicaciones.Remove(ubi);
            context.SaveChanges();
            return Ok(ubi);
        }


    }
}