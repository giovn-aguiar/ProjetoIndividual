var database = require("../database/config");

//Todas as KPI's estão sendo conectadas através de views.

function buscarPpmRecorde(idUsuario) {

    var instrucaoSql = `SELECT ppm FROM maiorPpm WHERE id_usuario = ${idUsuario}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarTempoRecorde(idUsuario) {

    var instrucaoSql = `SELECT tempo FROM tempoRecorde WHERE id_usuario = ${idUsuario}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDesempenhoRecorde(idUsuario) {

    var instrucaoSql = `SELECT desempenhoRecorde FROM desempenhoRecorde WHERE id_usuario = ${idUsuario}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Buscar medias:

function buscarPpmMedio(idUsuario) {

    var instrucaoSql = `SELECT media FROM ppmMedio WHERE id_usuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDesempenhoMedio(idUsuario) {

    var instrucaoSql = `SELECT media FROM desempenhoMedio WHERE id_usuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTempoMedio(idUsuario) {

    var instrucaoSql = `SELECT media FROM tempoMedio WHERE id_usuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarTempoRecorde,
    buscarPpmRecorde,
    buscarDesempenhoRecorde,
    buscarPpmMedio,
    buscarDesempenhoMedio,
    buscarTempoMedio
}
