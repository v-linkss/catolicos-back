const {  RecuperarSenhaService } = require('../services/Users/recuperarSenhaService')
const recuperarSenhaService = new RecuperarSenhaService()
class RecuperarSenhaController {
   

    

  async recuperarSenha(req, res) {

      try {
        const jsonData = req.body;
        const resultado = await recuperarSenhaService.recuperarSenha(jsonData.email);
        resultado = JSON.parse(resultado)
        res.status(200).json(resultado);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao recuperar senha' });
      }
    }

    async alterarSenha(req, res) {
      const jsonData = req.body;

      try {
        const resultado = await recuperarSenhaService.alterarSenha(jsonData);
        res.status(200).json(resultado);

      } catch (error) {
        res.status(500).json({ error: "Erro ao alterar a senha:", error });

      }
    }
}

module.exports = {
    RecuperarSenhaController
  };
