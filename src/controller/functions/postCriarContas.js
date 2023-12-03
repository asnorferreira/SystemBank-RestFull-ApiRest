const database = require("../../database/database.js");

const postCriarContas = async (req, res) => {
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
  try {
    const newAccount = {
      numero: database.identificador,
      usuario: { nome, cpf, data_nascimento, telefone, email, senha },
      saldo: 0,
      extrato: [],
    };
    database.contas.push(newAccount);
    database.identificador++;

    return res.status(201).json(newAccount);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = postCriarContas;
