const database = require("../../database/database");

const getExtrato = (req, res) => {
  const { numero_conta } = req.query;
  try {
    const depositos = database.depositos.filter((deposito) => {
      return deposito.numero_conta === Number(numero_conta);
    })

    const saques = database.saques.filter((saque) => {
      return saque.numero_conta === Number(numero_conta);
    });

    const transferenciasEnviadas = database.transferencias.filter(
      (transferencia) => {
        return transferencia.numero_conta_origem === Number(numero_conta);
      }
    );

    const transferenciasRecebidas = database.transferencias.filter(
      (transferencia) => {
        return transferencia.numero_conta_destino === Number(numero_conta);
      }
    );

    const extrato = {
      depositos,
      saques,
      transferenciasEnviadas,
      transferenciasRecebidas,
    };

    res.status(200).json(extrato);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = getExtrato;
