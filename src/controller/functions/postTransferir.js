const database = require("../../database/database");

const postTransferir = (req, res) => {
  const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;
  try {
    if (!numero_conta_origem || !numero_conta_destino || !valor || !senha) {
      return res
        .status(400)
        .json({ mensagem: "Todos os campos são obrigatórios" });
    }
    const contaOrigem = database.contas.find(
      (conta) => conta.numero === Number(numero_conta_origem)
    );
    const contaDestino = database.contas.find(
      (conta) => conta.numero === Number(numero_conta_destino)
    );
    if (!contaOrigem || !contaDestino) {
      return res
        .status(404)
        .json({ mensagem: "Conta de origem ou destino não encontrada" });
    }

    if (senha !== contaOrigem.usuario.senha) {
      return res
        .status(401)
        .json({ mensagem: "Senha da conta de origem inválida" });
    }

    if (contaOrigem.saldo < valor) {
      return res
        .status(400)
        .json({ mensagem: "Saldo insuficiente para realizar a transferência" });
    }

    contaOrigem.saldo -= valor;
    contaDestino.saldo += valor;

    database.transferencias.push({
      numero_conta_origem: Number(numero_conta_origem),
      numero_conta_destino: Number(numero_conta_destino),
      valor,
      data: new Date().toLocaleString(),
    });

    return res.status(201).json({
      mensagem: "Transferência efetuada",
      novo_saldo: contaOrigem.saldo,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = postTransferir;
