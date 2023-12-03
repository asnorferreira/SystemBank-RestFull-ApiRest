const database = require("../../database/database.js");

const isCPF = (cpf) => {
  const regexNumber = /^\d{11}$/;
  const cpfValid = database.contas.find((conta) => conta.usuario.cpf === cpf);
  if (cpfValid) {
    throw new Error("CPF já cadastrado.");
  }
  if (!regexNumber.test(cpf)) {
    throw new Error("Número de CPF inválido");
  }
  return true;
};

module.exports = isCPF;
