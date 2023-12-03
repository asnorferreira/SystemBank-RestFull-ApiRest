const express = require("express");
const routes = express.Router();
const controller = require("../controller/controllerIndex");
const middleware = require("../middleware/middlewareIndex");

routes.get("/contas", middleware.passwordBank, controller.getListarContas);
routes.post("/contas", middleware.authenticator, controller.postCriarContas);
routes.put(
  "/contas/:numeroConta/usuario",
  middleware.authenticator,
  middleware.existAccount,
  controller.putAtualizarConta
);
routes.delete(
  "/contas/:numeroConta",
  middleware.existAccount,
  controller.deleteConta
);
routes.post(
  "/transacoes/depositar",
  middleware.existAccount,
  controller.postDepositar
);
routes.post(
  "/transacoes/sacar",
  middleware.existAccount,
  middleware.passwordAccount,
  middleware.validValue,
  controller.postSacar
);
routes.post(
  "/transacoes/transferir",
  middleware.existAccount,
  middleware.passwordAccount,
  middleware.validValue,
  controller.postTransferir
);
routes.get(
  "/contas/saldo",
  middleware.existAccount,
  middleware.passwordAccount,
  controller.getSaldo
);
routes.get(
  "/contas/extrato",
  middleware.existAccount,
  middleware.passwordAccount,
  controller.getExtrato
);

module.exports = routes;
