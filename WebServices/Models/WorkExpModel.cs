using System.ComponentModel.DataAnnotations;

namespace WebServices.Models
{
    public class WorkExpModel
    {
        [Key]
        public int No { get; set; }

        [MaxLength(300)]
        public string Timeline { get; set; }

        [MaxLength(300)]
        public string Title { get; set; }

        public string Description { get; set; }
    }
}
