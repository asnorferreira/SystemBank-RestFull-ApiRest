const database = require("../../database/database.js");

const passwordBank = async (req, res, next) => {
  try {
    const { senha_banco } = req.query;

    if (!senha_banco || senha_banco !== database.banco.senha) {
      return res.status(401).json({ mensagem: "Senha do banco inválida" });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};

module.exports = passwordBank;
