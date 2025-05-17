var metricasModel = require("../models/metricasModel");

function buscarPpm(req, res) {

    const limite_linhas = 7;

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    metricasModel.buscarPpm(idUsuario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarPpm
}