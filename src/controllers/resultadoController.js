var resultadoModel = require("../models/resultadoModel");

function registrarResultado(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo jogo.html
    var idUsuario = req.body.idUsuario;
    var palavras = req.body.palavras;
    var acertos = req.body.acertos;
    var erros = req.body.erros;
    var tempo = req.body.tempo;
    var ppm = req.body.ppm;
    var desempenho = req.body.desempenho;

    // Faça as validações dos valores
    if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else if (palavras == undefined) {
        res.status(400).send("O total de palavras está undefined!");
    } else if (acertos == undefined) {
        res.status(400).send("O número de acertos está undefined!");
    } else if (erros == undefined) {
        res.status(400).send("O número de erros está undefined!");
    } else if (tempo == undefined) {
        res.status(400).send("O tempo está undefined!");
    }
    else if (ppm == undefined) {
        res.status(400).send("O ppm está undefined!");
    }  
    else if (desempenho == undefined) {
        res.status(400).send("O desempenho está undefined!");
    }  else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        resultadoModel.registrarResultado(idUsuario, palavras, acertos, erros, tempo, ppm, desempenho)
            .then(
                function (resultado) {
                }
            ).catch(
                function (erro) {
                    console.log("\nHouve um erro ao registrar o resultado! Erro: ", erro.sqlMessage || erro);
                    res.status(500).json(erro.sqlMessage || erro);
                }
            );
    }
}

module.exports = {
    registrarResultado
};