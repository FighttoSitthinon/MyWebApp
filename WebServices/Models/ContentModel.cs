using System.ComponentModel.DataAnnotations;

namespace WebServices.Models
{
    public class ContentModel
    {
        [Key]
        [MaxLength(300)]
        public string Key { get; set; }

        [MaxLength(300)]
        public string Group { get; set; }

        public string Value { get; set; }
    }
}
