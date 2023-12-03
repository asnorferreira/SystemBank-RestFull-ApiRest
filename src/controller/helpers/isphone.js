const isPhoneNumber = (telefone) => {
  const regexTelefone = /^\d{2}\d{9}$/;

  if (!regexTelefone.test(telefone)) {
    throw new Error("Telefone inválido");
  }
  return true;
};

module.exports = isPhoneNumber;
