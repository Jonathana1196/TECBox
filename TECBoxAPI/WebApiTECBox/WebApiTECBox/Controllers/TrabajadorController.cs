using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using WebApiTECBox.Models;

namespace WebApiTECBox.Controllers
{
    [Produces("application/json")]
    [Route("Trabajadores")]
    public class TrabajadorController : Controller
    {
        private readonly ApplicationDbContext context;
        
        public TrabajadorController(ApplicationDbContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public IEnumerable<Trabajador> GetTrabajadores()
        {
            return context.Trabajadores.ToList();
        }

        [HttpPost]
        public IActionResult PostTrabajador([FromBody]Trabajador trabajador)
        {
            if (ModelState.IsValid)
            {
                context.Trabajadores.Add(trabajador);
                context.SaveChanges();
            }

            return BadRequest(ModelState);
        }
        

    }
}