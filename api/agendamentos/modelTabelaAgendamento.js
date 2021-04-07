const Sequelize = require('sequelize');
const instaciadb = require('../db/index')


// criando colunas do banco de dados
const columns = {
  nome_cliente: {
    type: Sequelize.STRING,
    allowNull: false,

  },
  nome_servico: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM('agendado', 'cancelado'),
    allowNull: false,
  },
  data_agendamento: {
    type: Sequelize.DATE,
    allowNull: false
  },

}

const sequelizeOptions = {
  freezeTableName: true,
  tableName: "agendamento",
  timestamps: true,
  createAt: 'data_criacao',
  updateAt: 'data_atualizacao'
}

module.exports = instaciadb.define('agendamento', columns, sequelizeOptions)