const validBalance = (valor, saldo) => {
  if (saldo < valor) {
    throw new Error('Saldo insuficiente para realizar a operação');
  }
  return true;
};

module.exports = validBalance;
