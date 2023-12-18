const {  RecuperarSenhaService } = require('../services/Users/recuperarSenhaService')
const recuperarSenhaService = new RecuperarSenhaService()
class RecuperarSenhaController {
   

    

  async recuperarSenha(req, res) {

    try {
      const jsonData = req.body;

      if (!jsonData || !jsonData.email || jsonData.email === "") {
        return res.status(500).json({ error: "Invalid data. Data object should contain email." });

      }
      const resultado = await recuperarSenhaService.recuperarSenha(jsonData.email);
      res.status(200).json(resultado);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao recuperar senha' });
    }
  }

    async alterarSenha(req, res) {
      const jsonData = req.body;

      try { 

        if (!jsonData || jsonData === "" ||
            !jsonData.token || !jsonData.token === "" ||
            !jsonData.senha_nova || jsonData.senha_nova === "" ||
            !jsonData.versao || jsonData.versao === "") {
            return res.status(500).json({ error: "Invalid data. Data object should contain token, senha_nova and versao." });

        }

        const resultado = await recuperarSenhaService.alterarSenha(jsonData);
        res.status(200).json(resultado);

      } catch (error) {

        res.status(500).json({ error: "Erro ao alterar a senha",  });

      }
    }
}

module.exports = {
    RecuperarSenhaController
  };
