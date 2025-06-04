var kpiModel = require("../models/kpiModel");

// kpis: recordes

function buscarPpmRecorde(req, res) {

    var idUsuario = req.params.idUsuario;

    console.log(`cheguei aqui:`);
    console.log(idUsuario);

    kpiModel.buscarPpmRecorde(idUsuario).then(function (resultado) {
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


function buscarTempoRecorde(req, res) {

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as ultimas medidas`);

    kpiModel.buscarTempoRecorde(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar tempo recorde.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarDesempenhoRecorde(req, res) {

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as ultimas medidas`);

    kpiModel.buscarDesempenhoRecorde(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar desempenho recorde.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// kpis: media

function buscarPpmMedio(req, res) {

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as ultimas medidas`);

    kpiModel.buscarPpmMedio(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar desempenho recorde.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarDesempenhoMedio(req, res) {

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as ultimas medidas`);

    kpiModel.buscarDesempenhoMedio(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar desempenho recorde.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarTempoMedio(req, res) {

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as ultimas medidas`);

    kpiModel.buscarTempoMedio(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar tempo médio.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    buscarTempoRecorde,
    buscarPpmRecorde,
    buscarDesempenhoRecorde,
    buscarPpmMedio,
    buscarDesempenhoMedio,
    buscarTempoMedio
}