const database = require('../../database/database');

const putAtualizarConta = (req, res) => {
  try {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
    const accountBank = req.conta;
    accountBank.usuario = {
      nome,
      cpf,
      data_nascimento,
      telefone,
      email,
      senha,
    };

    return res.status(201).json({ mensagem: "Conta atualizada com sucesso" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = putAtualizarConta;