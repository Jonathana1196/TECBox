using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
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
        

    }
}