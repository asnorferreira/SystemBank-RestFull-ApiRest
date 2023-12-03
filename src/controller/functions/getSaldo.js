const database = require("../../database/database");

const getSaldo = (req, res) => {
    try {
        const { saldo } = req.conta;
        res.status(200).json({ saldo });
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = getSaldo;