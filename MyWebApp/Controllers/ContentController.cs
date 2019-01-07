using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebServices.Models;
using WebServices.Services;

namespace MyWebApp.Controllers
{
    [Route("api/Contents/[controller]")]
    [ApiController]
    public class ContentController : ControllerBase
    {
        private IContentService _ContentService;

        public ContentController()
        {
            _ContentService = new ContentService();
        }

        [HttpGet]
        [Route("All")]
        public List<ContentModel> GetAllContent()
        {
            return _ContentService.GetAllContent();
        }

        [HttpGet]
        [Route("ProfileContent")]
        public List<ContentModel> GetProfileContent()
        {
            return _ContentService.GetProfileContent();
        }

        [HttpGet]
        [Route("Intro")]
        public ContentModel GetIntro()
        {
            return _ContentService.GetIntro();
        }

        [HttpGet]
        [Route("WorkExp")]
        public List<WorkExpModel> GetWorkExp()
        {
            return _ContentService.GetWorkExp();
        }
    }
}