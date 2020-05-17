using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
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
        

    }
}