const validBalance = require("../../controller/helpers/validBalance.js");
const validPositive = require("../../controller/helpers/validPositive.js");

const validValue = async (req, res, next) => {
  const { valor } = req.body;
  try {
    validPositive(valor);

    const validarValor = validBalance(valor, req.conta.saldo);

    if (!validarValor) {
      return res
        .status(400)
        .json({ mensagem: "Saldo insuficiente para realizar a operação" });
    }
    
    next();
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = validValue;
