using Microsoft.EntityFrameworkCore;
using WebService.Models;

namespace WebService
{
    public partial class DataContext : DbContext
    {

        public DataContext()
        {
        }

        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ContentModel> Contents { get; set; }
       

        // Unable to generate entity type for table 'dbo.Persons'. Please see the warning messages.

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=tcp:sitthinon01.database.windows.net,1433;Initial Catalog=TestApi01;Persist Security Info=False;User ID=TestApi01;Password=P@ssw0rd;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ContentModel>(entity =>
            {
                entity.Property(e => e.Key).IsRequired();
            });
        }
    }
}
