using System.Net;
using System.Net.Mail;
using DogWebApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace DogWebApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MailController : ControllerBase
    {
        // POST: api/Mail
        [HttpPost]
        public void Post([FromBody] FeedbackMessage value)
        {
            Console.WriteLine($"{value.Name}, {value.Email}, feedback: {value.Feedback}");
            var smtpClient = new SmtpClient("smtp.gmail.com")
            {
                Port = 25,
                Credentials = new NetworkCredential("kamillapupupu@gmail.com", "ogvbnxfcbrbhmwng"),
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
            };

            var mailMessageToUser = new MailMessage
            {
                From = new MailAddress("kamillapupupu@gmail.com"),
                Subject = "Вы оставили отзыв на нашем сайте!",
                Body = $"<h1>{value.Name}, пасибо за отзыв! Гав-гав!</h1>",
                IsBodyHtml = true,
            };

            var mailMessageToAdmin = new MailMessage
            {
                From = new MailAddress("kamillapupupu@gmail.com"),
                Subject = "На сайте оставили отзыв!",
                Body =
                    $"<h1>Пользователь {value.Name} оставил следующий отзыв: {value.Feedback}.</h1><br><p>Почта для обратной связи: {value.Email}</p>",
                IsBodyHtml = true,
            };

            try
            {
                mailMessageToUser.To.Add(value.Email);
                mailMessageToAdmin.To.Add("kamillapupupu@gmail.com");
                smtpClient.Send(mailMessageToUser);
                smtpClient.Send(mailMessageToAdmin);
                Console.WriteLine("Success");
            }
            catch (Exception e)
            {
                Console.WriteLine($"Здесь какая-то ошибочка вышла! {e}");
            }
        }
    }
}