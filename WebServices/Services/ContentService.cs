using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebService;
using WebServices.Models;

namespace WebServices.Services
{
    public interface IContentService
    {
        List<ContentModel> GetAllContent();

        ContentModel GetProfileContent();
    }
    public class ContentService : IContentService
    {
        private DataContext _ctx;

        public ContentService()
        {
            _ctx = new DataContext();
        }

        public List<ContentModel> GetAllContent()
        {
            var results = _ctx.Content.Select(x => new ContentModel() { Key = x.Key, Group = x.Group, Value = x.Value }).ToList();
            return results;
        }

        public ContentModel GetProfileContent()
        {
            var results = _ctx.Content.Where(x=> x.Key.Equals("Profile") && x.Group.Equals(Const.Const.Content)).FirstOrDefault();
            return results;
        }
    }
}
