const database = require("../../database/database.js");

const getListarContas = async (req, res) => {
  return res.status(200).json(database.contas);
};

module.exports = getListarContas;
