using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace NotesAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        /// <summary>
        /// Get all notes
        /// </summary>
        /// <returns></returns>

        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Note controller works");
        }
    }

}

