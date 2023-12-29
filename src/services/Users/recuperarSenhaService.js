const { sequelize, QueryTypes } = require('../../config/sequelizeConf');
const {hash} = require('../Encrypt.js')
const crypto = require('crypto');

class RecuperarSenhaService {
  async recuperarSenha(email) {
    
    const resultados = await sequelize.query("SELECT func_envia_recuperacao_senha(:parametros,'')", {
      replacements: { parametros: email },
      type: QueryTypes.SELECT,
    });
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n",resultados)
    return resultados; // Corrigido para retornar "resultados" em vez de "resultado"
  }

  async alterarSenha(jsonData) {
    var hashedPassword = crypto.createHash('md5').update(jsonData.senha_nova).digest('hex');
    jsonData.senha_nova = hashedPassword

    jsonData.versao = "2"
    const jsonStr = JSON.stringify(jsonData); // Convertendo o objeto JSON para string

    const resultados = await sequelize.query("SELECT func_user_altera_senha(:parametros)", {
      replacements: { parametros: jsonStr },
      type: QueryTypes.SELECT,
    });
    return resultados;
     
  }
  


}

module.exports = {
  RecuperarSenhaService
};
