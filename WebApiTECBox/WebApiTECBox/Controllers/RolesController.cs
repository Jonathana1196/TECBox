using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiTECBox.Models;

namespace WebApiTECBox.Controllers
{
    [Produces("application/json")]
    [Route("Roles")]
    public class RolesController : Controller
    {
        private readonly ApplicationDbContext context;
        
        public RolesController(ApplicationDbContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public IEnumerable<Roles> GetRoles()
        {
            return context.Roleses.ToList();
        }

        [HttpPost]
        public IActionResult PostRoles([FromBody]Roles rol)
        {
            if (ModelState.IsValid)
            {
                context.Roleses.Add(rol);
                context.SaveChanges();
            }

            return BadRequest(ModelState);
        }
        [HttpPut("{id}")]
        public  IActionResult PutRol([FromBody]Roles rol, string id)
        {
            if (rol.Id != id)
            {
                return BadRequest();
            }

            context.Entry(rol).State = EntityState.Modified;
            context.SaveChanges();
            return Ok();
        }
        
        [HttpDelete("{id}")]
        public  IActionResult DeleteRol(string id)
        {
            var rol = context.Roleses.FirstOrDefault(x => x.Id == id);
            if (rol==null)
            {
                return BadRequest();
            }

            context.Roleses.Remove(rol);
            context.SaveChanges();
            return Ok(rol);
        }


    }
}