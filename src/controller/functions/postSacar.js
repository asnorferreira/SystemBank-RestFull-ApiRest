const database = require("../../database/database");

const postSacar = async (req, res) => {
  const { numero_conta, valor, senha } = req.body;
  try {
    if (!numero_conta || !valor || !senha) {
      return res
        .status(400)
        .json({ mensagem: "Todos os campos são obrigatórios" });
    }
    req.conta.saldo -= valor;
    database.saques.push({
      numero_conta: Number(numero_conta),
      valor,
      data: new Date().toLocaleString(),
    });

    return res
      .status(201)
      .json({ mensagem: "Saque efetuado", novo_saldo: req.conta.saldo });
  } catch (error) {
    return res.status(500).json({ mensagem: error.message });
  }
};

module.exports = postSacar;
