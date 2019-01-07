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

        List<ContentModel> GetProfileContent();

        ContentModel GetIntro();

        List<WorkExpModel> GetWorkExp();
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

        public List<ContentModel> GetProfileContent()
        {
            var results = _ctx.Content.Where(x=> x.Group.Equals(Const.Const.Content)).ToList();
            return results;
        }

        public ContentModel GetIntro()
        {
            var result = _ctx.Content.Where(x => x.Group.Equals(Const.Const.Intro)).FirstOrDefault();
            return result;
        }

        public List<WorkExpModel> GetWorkExp()
        {
            var results = _ctx.WorkExp.ToList();
            return results;
        }
    }
}
