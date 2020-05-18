using Microsoft.EntityFrameworkCore;
namespace WebApiTECBox.Models
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options)
        {
            
        }
        public DbSet<Rutas>Rutasrs { get; set; }

        public DbSet<Trabajador>Trabajadores { get; set; }
        public DbSet<Ubicacion>Ubicaciones { get; set; }
        public DbSet<Cliente>Clientes{ get; set; }
        public DbSet<Vendedor>Vendedores{ get; set; }
        
        public DbSet<Sucursales>Sucursaleses{ get; set; }

        
        public DbSet<Roles>Roleses {get; set; }
        public DbSet<Producto>Productos {get; set; }
        
        public DbSet<Paquete>Paquetes {get; set; }




    }
}