using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiTECBox.Models;

namespace WebApiTECBox.Controllers
{
    [Produces("application/json")]
    [Route("Sucursales")]
    public class SucursalesController : Controller
    {
        private readonly ApplicationDbContext context;
        
        public SucursalesController(ApplicationDbContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public IEnumerable<Sucursales> GetSucursales()
        {
            return context.Sucursaleses.ToList();
        }

        [HttpPost]
        public IActionResult PostSucursales([FromBody]Sucursales sucursal)
        {
            if (ModelState.IsValid)
            {
                context.Sucursaleses.Add(sucursal);
                context.SaveChanges();
            }

            return BadRequest(ModelState);
        }
        [HttpPut("{id}")]
        public  IActionResult PutSucursal([FromBody]Sucursales sucursal , string id)
        {
            if (sucursal.Id != id)
            {
                return BadRequest();
            }

            context.Entry(sucursal).State = EntityState.Modified;
            context.SaveChanges();
            return Ok();
        }
        
        [HttpDelete("{id}")]
        public  IActionResult DeleteCliente(string id)
        {
            var sur = context.Sucursaleses.FirstOrDefault(x => x.Id == id);
            if (sur==null)
            {
                return BadRequest();
            }

            context.Sucursaleses.Remove(sur);
            context.SaveChanges();
            return Ok(sur);
        }

    }
}