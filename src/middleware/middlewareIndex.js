const passwordBank = require("./functions/passwordBank.js");
const authenticator = require("./functions/authenticator.js");
const validValue = require("./functions/validValue.js");
const passwordAccount = require("./functions/passwordAccount.js");
const existAccount = require("./functions/existAccount.js");

module.exports = {
  passwordBank,
  authenticator,
  existAccount,
  validValue,
  passwordAccount,
};
