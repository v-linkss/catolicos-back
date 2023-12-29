require('dotenv').config();
const crypto = require('crypto');

function hash(password) {
  password = crypto.createHash('md5').update(password).digest('hex');
  password = crypto.createHash('sha1').update(password).digest('hex');


  console.log("@@@@@@@@@@@@@@@@@@@-password-@@@@@@@@@@@@@@@@@@@@@\n",password);

  const md5Hash = crypto.createHash('md5').update(password + process.env.CHAVE_PRIVADA).digest('hex');
  const sha1Hash = crypto.createHash('sha1').update(md5Hash).digest('hex');

  
  console.log("@@@@@@@@@@@@@@@@@@@@-sha1Hash-@@@@@@@@@@@@@@@@@@@@\n",sha1Hash);
  

  return sha1Hash;
}

module.exports = { hash };
