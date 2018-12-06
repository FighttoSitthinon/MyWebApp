using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

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
