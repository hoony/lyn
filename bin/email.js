var EOL = require('os').EOL;
var config = require('../config');
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill(config.email.key);

var message = {
  "subject": config.email.subject ? config.email.subject : "",
  "from_email": config.email.fromEmail,
  "from_name": config.email.fromName,
  "to": [{
      "email": config.email.toEmail,
      "name": config.email.toName,
      "type": "to"
  }],
  "headers": {
    "Reply-To": config.email.fromEmail
  }
};

module.exports = email;

email.usage = ['lyn email <options>', 'send an email to your friend'].join(EOL);

email.options = [
  {
    'name': 'subject',
    'abbr': 's',
    'help': 'the subject of the email'
  },
  {
    'name': 'message',
    'abbr': 'm',
    'help': 'the body content of the email'
  }
];

function email (option) {
  if (option && (option.s || option.subject)) message.subject = (option.s || option.subject);
  if (option && (option.m || option.message)) message.text = (option.m || option.message);

  mandrill_client.messages.send({"message": message, "async": true}, function(result) {
    console.log("the email has been sent successfully!");
    console.log("the result is: ");
    console.log(result);
  }, function(e) {
      // Mandrill returns the error as an object with name and message keys
      console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
      // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
  });
}
