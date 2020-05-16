using Microsoft.EntityFrameworkCore;
namespace WebApiTECBox.Models
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options)
        {
            
        }
        public DbSet<Trabajador>Trabajadores { get; set; }
    }
}