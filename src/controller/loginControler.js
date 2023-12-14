const { LoginService } = require("../services/Users/loginService");
const loginService = new LoginService();
class LoginController {
  async auth(req, res) {
    try {
      const jsonData = req.body;
      const resultado = await loginService.authUser(jsonData);

      if (
        resultado.error === "Erro de autenticação: Senha inválida" ||
        (resultado[0] &&
          resultado[0].func_autentica_acesso_v1 ===
            '[{"status":"LOGIN","status_mensagem":"Senha inválida2."}]')
      ) {
        return res
          .status(400)
          .json({ error: "Erro de autenticação: Senha inválida" });
      } else if(resultado[0] &&
        resultado[0].func_autentica_acesso_v1 === '[{"status":"LOGIN","status_mensagem":"Esse email não está cadastrado no Durabil."}]'){
          return res.status(400).json({ error: "Erro de autenticação: Usuario Invalido" });

      }
      
      else {
        console.log("Dados do usuário autenticado:", resultado);
        return res.status(200).json(resultado);
      }
    } catch (error) {
      res.status(500).json({ error: "Erro ao autenticar usuário" });
    }
  }
}

module.exports = {
  LoginController,
};