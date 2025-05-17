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
        erros, acertos
                    FROM resultados
                    WHERE id_usuario = ${idUsuario}
                    ORDER BY id DESC LIMIT 5`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    buscarPpm
}
