var frasesModel = require("../models/frasesModel");

// kpis: recordes

function buscarFrases(req, res) {

    var nivel = req.params.nivel;

    console.log(`cheguei aqui:`);

    frasesModel.buscarFrases(nivel).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar ppm recorde.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarFrases
}
