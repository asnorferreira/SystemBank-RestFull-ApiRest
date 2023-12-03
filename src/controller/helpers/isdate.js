const { parse, isValid } = require('date-fns');

const isDate = (dataNascimento) => {
  const formatoPadrao = "dd/MM/yyyy";

  if (!isValid(parse(dataNascimento, formatoPadrao, new Date()))) {
    throw new Error("Data de nascimento inválida");
  }
  return true;
};

module.exports = isDate;
