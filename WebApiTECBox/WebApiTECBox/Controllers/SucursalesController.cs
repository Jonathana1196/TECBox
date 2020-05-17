using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
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
        

    }
}