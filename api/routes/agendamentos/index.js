const router = require('express').Router();
const TabelaAgendamento = require('../../agendamentos/TabelaAgendamento');
const Agendamento = require('../../agendamentos/Agendamento');


router.get('/agendamentos', async(req, resp) => {
    const results = await TabelaAgendamento.listar()
    resp.send(JSON.stringify(results));

});

router.post('/agendamentos', async (req, resp) => {
    const reqAgendamento = req.body;
    const agendamento = new Agendamento(reqAgendamento);
    await agendamento.criar()
    resp.send(JSON.stringify(agendamento))
});

router.get('/agendamentos/:idAgendamento', async (req, resp) => {
    try {
        
        const id = req.params.idAgendamento;
        const agendamento = new Agendamento({id:id}); 
        await agendamento.buscar();
        console.log(agendamento)

        resp.send(JSON.stringify(agendamento.buscar()));  

    } catch (error) {
        resp.send(JSON.stringify({
           mensagem: error.mensage
        }))
    }
    
    
})

router.put('agendamentos/:idAgendamento', async (req, resp) => {
    const id = req.params.idAgendamento;
    const dadosBody = req.body;
    const dados = Object.assign({}, dadosBody, {id:id})
    const agendamento = new Agendamento(dados)
    await agendamento.atualizar

})

router.delete('/agendamentos/:idAgendamento', async (req, resp) => {
    try {
        const id = req.params.idAgendamento
        const agendamento = new Agendamento({id:id})
        await agendamento.remover()
        resp.status(204).send({mensagem: 'Registro Removido'})
        
    } catch (error) {
        resp.send(JSON.stringify({

            mensagem: error.mensage
        }))
    }



})


module.exports = router;