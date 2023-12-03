const database = require('../../database/database');

const deleteConta = (req, res) => {
    try {
        const index = database.contas.indexOf(req.conta);
        database.contas.splice(index, 1);

        return res.status(201).json({ mensagem: "Conta excluída com sucesso"});  
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = deleteConta;