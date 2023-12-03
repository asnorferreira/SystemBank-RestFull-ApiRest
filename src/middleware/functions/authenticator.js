const isCPF = require("../../controller/helpers/iscpf");
const isPhone = require("../../controller/helpers/isphone");
const isEmail = require("../../controller/helpers/isemail");
const isDate = require("../../controller/helpers/isdate");

const authenticator = async (req, res, next) => {
  const { nome, email, cpf, data_nascimento, telefone, senha } = req.body;
  try {
    if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
      return res
        .status(400)
        .json({ mensagem: "Todos os campos são obrigatórios" });
    }
    const validarCpf = isCPF(cpf);
    if (!validarCpf) {
      return res.status(400).json({ mensagem: "Cpf Inválido" });
    }

    const validarEmail = isEmail(email);
    if (!validarEmail) {
      return res.status(400).json({ mensagem: "Email Inválido" });
    }

    const validarPhone = isPhone(telefone);
    if (!validarPhone) {
      return res.status(400).json({ mensagem: "Telefone Inválido" });
    }

    const validarDate = isDate(data_nascimento);
    if (!validarDate) {
      return res.status(400).json({ mensagem: "Data de nascimento Inválida" });
    }

    next();
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = authenticator;
