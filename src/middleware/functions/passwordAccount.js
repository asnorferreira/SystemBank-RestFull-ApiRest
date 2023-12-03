const database = require("../../database/database");

const passwordAccount = (req, res, next) => {
  try {
    const senha = req.body.senha || req.query.senha;

    if (!senha) {
      return res.status(400).json({ mensagem: "Senha não fornecida" });
    }
    if (senha !== req.conta.usuario.senha) {
      return res.status(401).json({ mensagem: "Senha da conta inválida" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = passwordAccount;
