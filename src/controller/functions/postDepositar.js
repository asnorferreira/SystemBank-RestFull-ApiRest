const database = require("../../database/database");

const postDepositar = (req, res) => {
  try {
    const { numero_conta, valor } = req.body;
    if (!numero_conta || !valor) {
      return res
        .status(400)
        .json({ mensagem: "Os campos numero_conta e valor são obrigatórios" });
    }
    if (valor <= 0) {
      return res.status(400).json({ mensagem: "O valor deve ser positivo" });
    }

    req.conta.saldo += valor;
    database.depositos.push({
      numero_conta: Number(numero_conta),
      valor,
      data: new Date().toLocaleString(),
    });

    return res
      .status(201)
      .json({ mensagem: "Depósito efetuado", novo_saldo: req.conta.saldo });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = postDepositar;
