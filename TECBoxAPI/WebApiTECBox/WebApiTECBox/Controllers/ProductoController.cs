using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using WebApiTECBox.Models;

namespace WebApiTECBox.Controllers
{
    [Produces("application/json")]
    [Route("Productos")]
    public class ProductoController : Controller
    {
        private readonly ApplicationDbContext context;
        
        public ProductoController(ApplicationDbContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public IEnumerable<Producto> GetProducto()
        {
            return context.Productos.ToList();
        }

        [HttpPost]
        public IActionResult PostProducto([FromBody]Producto producto)
        {
            if (ModelState.IsValid)
            {
                context.Productos.Add(producto);
                context.SaveChanges();
            }

            return BadRequest(ModelState);
        }
        

    }
}