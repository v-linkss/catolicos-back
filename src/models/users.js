const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config/sequelizeConf");


const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nome: {
    type: DataTypes.STRING
  },
  group_id: {
    type: DataTypes.INTEGER
  },
  role: {
    type: DataTypes.STRING
  },
  created: {
    type: DataTypes.DATE
  },
  excluido: {
    type: DataTypes.BOOLEAN
  },
  master: {
    type: DataTypes.BOOLEAN
  },
  token: {
    type: DataTypes.STRING
  },
  url_foto: {
    type: DataTypes.STRING
  },
  celular: {
    type: DataTypes.STRING
  },
  tabvalores_perfil_id: {
    type: DataTypes.INTEGER
  },
  fone: {
    type: DataTypes.STRING
  }
}, {
});

module.exports = User;
