const { LoginService } = require('./Users/loginService'); 
const { RecuperarSenhaService } = require('./Users/recuperarSenhaService'); 
const { hash } = require('./Encrypt'); 


  
  module.exports = {
    LoginService,
    RecuperarSenhaService,
    hash
  };