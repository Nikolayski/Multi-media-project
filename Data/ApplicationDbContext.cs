using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Models;

namespace Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

        public DbSet<Car>  Cars{ get; set; }

        public DbSet<Blog>  Blogs{ get; set; }

        public DbSet<Comment> Comments { get; set; }

        public DbSet<Product> Products { get; set; }

        public DbSet<CarComments> CarComments { get; set; }
        public DbSet<BlogComments> BlogComments { get; set; }
        public DbSet<ProductsComments> ProductComments { get; set; }

        public DbSet<Contact>  Contacts{ get; set; }
    }
}
