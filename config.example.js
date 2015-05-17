var config = module.exports = {};

config.email = {
  // subject is optional
  // 'subject': '',
  'key': 'MANDRILL_API_KEY',
  'fromEmail': 'YOUR_EMAIL_ADDRESS',
  'fromName': 'YOUR_NAME',
  'toEmail': 'YOUR_FRIEND_EMAIL',
  'toName': 'YOUR_FRIEND_NAME'
};

config.music = {
  'fromPath': 'DIRECTORY_FILES_EXISTS',
  'targetPath': 'DIRECTORY_FILES_WILL_BE_STORED'
}
