var resultadoModel = require("../models/resultadoModel");

function registrar(req, res) {
    var { idUsuario, palavras, acertos, erros, tempo } = req.body;

    resultadoModel.registrarResultado(idUsuario, palavras, acertos, erros, tempo)
        .then(() => res.status(200).send("Resultado registrado com sucesso!"))
        .catch(erro => {
            console.error("Erro ao registrar resultado: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    registrar
};
