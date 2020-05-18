using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        [HttpPut("{id}")]
        public  IActionResult PutProducto([FromBody]Producto producto, string id)
        {
            if (producto.CodigoBarras!= id)
            {
                return BadRequest();
            }

            context.Entry(producto).State = EntityState.Modified;
            context.SaveChanges();
            return Ok();
        }
        
        [HttpDelete("{id}")]
        public  IActionResult DeleteProducto(string id)
        {
            var pro = context.Productos.FirstOrDefault(x => x.CodigoBarras == id);
            if (pro==null)
            {
                return BadRequest();
            }

            context.Productos.Remove(pro);
            context.SaveChanges();
            return Ok(pro);
        }


    }
}