var database = require("../database/config");

function buscarPpm(idUsuario) {

    var instrucaoSql = `SELECT 
        ppm as ppm,
                    momento
                    FROM resultados
                    WHERE id_usuario = ${idUsuario}
                    ORDER BY id DESC LIMIT 5`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarErrosAcertos(idUsuario) {

    var instrucaoSql = `SELECT 
        sum(erros) as erros, sum(acertos) as acertos
                    FROM resultados
                    WHERE id_usuario = ${idUsuario}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDesempenho(idUsuario) {

    var instrucaoSql = `SELECT 
        desempenho, momento
                    FROM resultados
                    WHERE id_usuario = ${idUsuario}
                    ORDER BY id DESC LIMIT 5`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarPpm, buscarErrosAcertos, buscarDesempenho
}
