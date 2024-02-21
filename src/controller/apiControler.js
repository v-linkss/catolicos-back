const { ApiService } = require("../services/apiService");
const apiService = new ApiService();
class ApiController {
  async func_cidades(req, res) {
    try {
      const resultado = await apiService.func_cidades();
      return res.status(200).json(resultado);

      
    } catch (error) {
      res.status(500).json({ error: "Erro ao autenticar usuário" });
    }
  }

  async func_eventos(req, res) {
    try {
      const jsonData = req.body;
      const resultado = await apiService.func_eventos(jsonData);
      return res.status(200).json(resultado);

      
    } catch (error) {
      res.status(500).json({ error: "Erro ao autenticar usuário" });
    }
  }


  async func_dados_paroquia(req, res) {
    try {
      const jsonData = req.body;
      const resultado = await apiService.func_dados_paroquia(jsonData);
      return res.status(200).json(resultado);

      
    } catch (error) {
      res.status(500).json({ error: "Erro ao autenticar usuário" });
    }
  }
  

  async func_dados_missas(req, res) {
    try {
      const jsonData = req.body;
      const resultado = await apiService.func_missas(jsonData);
      return res.status(200).json(resultado);

      
    } catch (error) {
      res.status(500).json({ error: "Erro ao autenticar usuário" });
    }
  }

  async func_confissoes(req, res) {
    try {
      const jsonData = req.body;
      const resultado = await apiService.func_confissoes(jsonData);
      return res.status(200).json(resultado);

      
    } catch (error) {
      res.status(500).json({ error: "Erro ao autenticar usuário" });
    }
  }

}

module.exports = {
  ApiController,
};