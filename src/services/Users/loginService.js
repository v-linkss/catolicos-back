const { sequelize,QueryTypes } = require('../../config/sequelizeConf')
const {hash} = require('../Encrypt.js')
class LoginService {


  
  async  authUser(data) {
    // const usuarioEncontrado = await findUser(data.user);
    data.versao="2"
    var hashedPassword = data.senha;
    var hashedPassword = hash(hashedPassword);
    // hashedPassword = data.senha;

    data.senha = hashedPassword

  
    // Execute a função 'func_autentica_acesso_v1' usando o método query
    const resultado = await sequelize.query("SELECT * FROM func_autentica_acesso_v1(:parametros)", {
      replacements: {  parametros: JSON.stringify(data) }, // Substitua pelos parâmetros necessários
      type: QueryTypes.SELECT,
    });
        const parsedResultado = resultado.map(item=> {
            return{
              func_autentica_acesso_v1: JSON.parse(item.func_autentica_acesso_v1),
            }
          })
        return parsedResultado  
    // Faça o processamento necessário com os resultados aqui
     
    
  }
  


}

module.exports = {
  LoginService,
};
