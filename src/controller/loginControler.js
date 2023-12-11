const {  LoginService } = require('../services/Users/loginService')
const loginService = new LoginService()
class LoginController {
   

    

    async auth(req, res) {
        try {
          const jsonData = req.body;
          const resultado = await loginService.authUser(jsonData);
          if(resultado.status != "ok"){
            console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ\n",resultado.status_mensagem)
            res.status(500).json({ error: resultado });
          }
          res.status(200).json(resultado);
        } catch (error) {
          res.status(500).json({ error: 'Erro ao autenticar usuário' });
        }
      }
}

module.exports = {
    LoginController
  };
