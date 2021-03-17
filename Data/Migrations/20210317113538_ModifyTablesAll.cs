using Microsoft.EntityFrameworkCore.Migrations;

namespace Data.Migrations
{
    public partial class ModifyTablesAll : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CreatorId",
                table: "Blogs",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Blogs_CreatorId",
                table: "Blogs",
                column: "CreatorId");

            migrationBuilder.AddForeignKey(
                name: "FK_Blogs_AspNetUsers_CreatorId",
                table: "Blogs",
                column: "CreatorId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Blogs_AspNetUsers_CreatorId",
                table: "Blogs");

            migrationBuilder.DropIndex(
                name: "IX_Blogs_CreatorId",
                table: "Blogs");

            migrationBuilder.DropColumn(
                name: "CreatorId",
                table: "Blogs");
        }
    }
}
