const { sequelize, QueryTypes } = require('../config/sequelizeConf');
class ApiService {
  async func_cidades(data) {
    // Execute a função 'func_autentica_acesso_v1' usando o método query
    const resultado = await sequelize.query(
      'SELECT * FROM func_json_cidades()',
      {
        replacements: { parametros: JSON.stringify() }, // Substitua pelos parâmetros necessários
        type: QueryTypes.SELECT,
      },
    );
    const parsedResultado = resultado.map((item) => {
      return {
        func_json_cidades: JSON.parse(item.func_json_cidades),
      };
    });
    return parsedResultado;
    // Faça o processamento necessário com os resultados aqui
  }

  async func_eventos(data) {
    // Execute a função 'func_autentica_acesso_v1' usando o método query
    const resultado = await sequelize.query(
      'SELECT * FROM func_eventos(:parametros)',
      {
        replacements: { parametros: JSON.stringify(data) }, // Substitua pelos parâmetros necessários
        type: QueryTypes.SELECT,
      },
    );
    const parsedResultado = resultado.map((item) => {
      return {
        func_eventos: JSON.parse(item.func_eventos),
      };
    });
    return parsedResultado;
    // Faça o processamento necessário com os resultados aqui
  }

  async func_missas(data) {
    // Execute a função 'func_autentica_acesso_v1' usando o método query
    const resultado = await sequelize.query(
      'SELECT * FROM func_missas(:parametros)',
      {
        replacements: { parametros: JSON.stringify(data) }, // Substitua pelos parâmetros necessários
        type: QueryTypes.SELECT,
      },
    );
    const parsedResultado = resultado.map((item) => {
      return {
        func_missas: JSON.parse(item.func_missas),
      };
    });
    return parsedResultado;
    // Faça o processamento necessário com os resultados aqui
  }

  async func_dados_paroquia(data) {
    // Execute a função 'func_autentica_acesso_v1' usando o método query
    const resultado = await sequelize.query(
      'SELECT * FROM func_dados_paroquia(:parametros)',
      {
        replacements: { parametros: JSON.stringify(data) }, // Substitua pelos parâmetros necessários
        type: QueryTypes.SELECT,
      },
    );
    const parsedResultado = resultado.map((item) => {
      return {
        func_dados_paroquia: JSON.parse(item.func_dados_paroquia),
      };
    });
    return parsedResultado;
    // Faça o processamento necessário com os resultados aqui
  }

  async func_confissoes(data) {
    // Execute a função 'func_autentica_acesso_v1' usando o método query
    const resultado = await sequelize.query(
      'SELECT * FROM func_confissoes(:parametros)',
      {
        replacements: { parametros: JSON.stringify(data) }, // Substitua pelos parâmetros necessários
        type: QueryTypes.SELECT,
      },
    );
    const parsedResultado = resultado.map((item) => {
      return {
        func_confissoes: JSON.parse(item.func_confissoes),
      };
    });
    return parsedResultado;
    // Faça o processamento necessário com os resultados aqui
  }
}

module.exports = {
  ApiService,
};
