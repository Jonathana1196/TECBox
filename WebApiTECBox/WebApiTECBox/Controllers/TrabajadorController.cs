using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        
        [HttpPut("{id}")]
        public  IActionResult PutTrabajador([FromBody]Trabajador trabajador, string id)
        {
            if (trabajador.Cedula != id)
            {
                return BadRequest();
            }

            context.Entry(trabajador).State = EntityState.Modified;
            context.SaveChanges();
            return Ok();
        }
        
        [HttpDelete("{id}")]
        public  IActionResult DeleteTrabajador(string id)
        {
            var tra = context.Trabajadores.FirstOrDefault(x => x.Cedula == id);
            if (tra==null)
            {
                return BadRequest();
            }

            context.Trabajadores.Remove(tra);
            context.SaveChanges();
            return Ok(tra);
        }
        

    }
}