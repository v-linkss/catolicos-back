const { sequelize, QueryTypes } = require('../../config/sequelizeConf');

class RecuperarSenhaService {
  async recuperarSenha(email) {
    
    const resultados = await sequelize.query("SELECT func_envia_recuperacao_senha(:parametros,'')", {
      replacements: { parametros: email },
      type: QueryTypes.SELECT,
    });
    return resultados; // Corrigido para retornar "resultados" em vez de "resultado"
  }
}

module.exports = {
  RecuperarSenhaService
};
