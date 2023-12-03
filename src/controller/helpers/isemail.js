const database = require("../../database/database.js");

const isEmail = (email) => {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValid = database.contas.find((conta) => conta.usuario.email === email);
  if (emailValid) {
    throw new Error("E-mail já cadastrado.");
  }
  if (!regexEmail.test(email)) {
    throw new Error("E-mail inválido");
  }
  return true;
};

module.exports = isEmail;
