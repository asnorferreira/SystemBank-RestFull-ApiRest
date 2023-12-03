const getListarContas = require('./functions/getListarContas');
const postCriarContas = require('./functions/postCriarContas');
const putAtualizarConta = require('./functions/putAtualizarConta');
const deleteConta = require('./functions/deleteConta');
const postDepositar = require('./functions/postDepositar');
const postSacar = require('./functions/postSacar');
const postTransferir = require('./functions/postTransferir');
const getSaldo = require('./functions/getSaldo');
const getExtrato = require('./functions/getExtrato');

module.exports = {
    getListarContas,
    postCriarContas,
    putAtualizarConta,
    deleteConta,
    postDepositar,
    postSacar,
    postTransferir,
    getSaldo,
    getExtrato
};