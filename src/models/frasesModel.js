
var database = require("../database/config");

//Todas as KPI's estão sendo conectadas através de views.

function buscarFrases(nivel) {

    var instrucaoSql = `SELECT descricao FROM frasesDinamicas WHERE nivel = ${nivel}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarFrases
}