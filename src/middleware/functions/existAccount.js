const database = require("../../database/database");

const existAccount = (req, res, next) => {
  try {
    const numeroConta =
      req.params.numeroConta ||
      req.body.numero_conta ||
      req.query.numero_conta ||
      req.body.numero_conta_origem ||
      req.body.numero_conta_destino;
    const accountBank = database.contas.find((conta) => {
      return conta.numero === Number(numeroConta);
    });
    if (!numeroConta) {
      return res
        .status(400)
        .json({ mensagem: "Número da conta não fornecido." });
    }
    if (!accountBank) {
      return res.status(404).json({ mensagem: "Conta não encontrada." });
    }
    req.conta = accountBank;
    next();
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = existAccount;
