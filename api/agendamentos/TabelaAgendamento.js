const modelTabelaAgendamento = require('./modelTabelaAgendamento');
const modeloAgendamento = require('./modelTabelaAgendamento');

module.exports = {
    async listar() {
      return await modelTabelaAgendamento.findAll({
        raw: true,
      })
    }
}