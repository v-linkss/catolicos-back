const express = require("express");
const { LoginController, RecuperarSenhaController} = require("../controller/index");
const { ProxyApi } = require("../middleware/MSGerenciaProxy")

const { authMiddleware } = require('../middleware/Auth'); 

const routes = express.Router();
const loginController = new LoginController(); // Criando uma instância do LoginController
const recuperarSenhaController = new RecuperarSenhaController(); // Criando uma instância do LoginController



routes.post("/login", async (req, res) => {
  await loginController.auth(req, res);
});


routes.post("/recuperarSenha", async (req, res) => {

  await recuperarSenhaController.recuperarSenha(req, res);
});

routes.post("/alterarSenha", async (req, res) => {

  await recuperarSenhaController.alterarSenha(req, res);
});

routes.use(authMiddleware); // TODAS AS ROTAS A BAIXO DESTA LINHA ESTARAM PROTEGIDAS PELA VALIDAÇÃO DE TOKEN



routes.use("/service/gerencia/*", ProxyApi);

module.exports = {
  routes,
};
