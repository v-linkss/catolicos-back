const express = require("express");
const { ApiController } = require("../controller/apiControler");


const routes = express.Router();
const apiController = new ApiController(); // Criando uma instância do LoginController


routes.post("/cidades", async (req, res) => {
  await apiController.func_cidades(req, res);
});

routes.post("/eventos", async (req, res) => {
  await apiController.func_eventos(req, res);
});

routes.post("/missas", async (req, res) => {
  await apiController.func_dados_missas(req, res);
});

routes.post("/paroquia", async (req, res) => {
  await apiController.func_dados_paroquia(req, res);
});

routes.post("/confissoes", async (req, res) => {
  await apiController.func_confissoes(req, res);
});



module.exports = {
  routes,
};
