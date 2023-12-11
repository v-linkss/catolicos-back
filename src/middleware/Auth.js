// auth.js

const { QueryTypes } = require('sequelize');
const { sequelize } = require('../config/sequelizeConf'); // Importe seu objeto Sequelize ou a conexão com o banco de dados

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  const data = {
    token: authHeader,
  };

  try {
    const resultado = await sequelize.query("SELECT * FROM func_autentica_acesso_v1(:parametros)", {
      replacements: { parametros: JSON.stringify(data) },
      type: QueryTypes.SELECT,
    });

    if (resultado && resultado.length > 0) {
      // Se a autenticação for bem-sucedida, você pode adicionar dados ao objeto req para serem utilizados nas próximas rotas, se necessário
      req.user = resultado[0]; // Adicione os dados do usuário autenticado ao objeto req para utilização posterior, se necessário
      next(); // Chame next() para continuar com a próxima rota/middleware
    } else {
      return res.status(401).json({ error: 'Falha na autenticação' });
    }
  } catch (error) {
    console.error('Erro ao autenticar usuário:', error);
    return res.status(500).json({ error: 'Erro ao autenticar usuário' });
  }
};

module.exports = { authMiddleware };
