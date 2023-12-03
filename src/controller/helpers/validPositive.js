const validPositive = (valor) => {
  if (isNaN(Number(valor)) || Number(valor) <= 0) {
    throw new Error("O valor deve ser um número positivo");
  }
  return true;
};

module.exports = validPositive;
