const {  LoginService } = require('../services/Users/loginService')
const loginService = new LoginService()
class LoginController {
   

    

    async auth(req, res) {
        try {
          const jsonData = req.body;
          const resultado = await loginService.authUser(jsonData);
          // if(resultado.status != "OK"){
          //   console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ\nhhhh",resultado)
          //   res.status(500).json({ error: resultado });
          // }else{
          //   console.log("33333333333333333333333333\nhhhh",resultado)

           res.status(200).json(resultado);
          // }
        } catch (error) {
          res.status(500).json({ error: 'Erro ao autenticar usuário' });
        }
      }
}

module.exports = {
    LoginController
  };
