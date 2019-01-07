using Microsoft.EntityFrameworkCore;
using WebServices.Models;

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

        //Variable Name must be like Table Name in Database
        public virtual DbSet<ContentModel> Content { get; set; }
        public virtual DbSet<WorkExpModel> WorkExp { get; set; }


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
