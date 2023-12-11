const {  RecuperarSenhaService } = require('../services/Users/recuperarSenhaService')
const recuperarSenhaService = new RecuperarSenhaService()
class RecuperarSenhaController {
   

    

  async recuperarSenha(req, res) {

      try {
        const jsonData = req.body;
        const resultado = await recuperarSenhaService.recuperarSenha(jsonData.email);
        res.status(200).json(resultado);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao recuperar senha' });
      }
    }
}

module.exports = {
    RecuperarSenhaController
  };
