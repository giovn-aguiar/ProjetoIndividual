var database = require("../database/config");

function registrarResultado(idUsuario, palavras, acertos, erros, tempo) {
    var instrucaoSql = `
        INSERT INTO resultado_jogo (palavras_digitadas, acertos, erros, tempo_segundos, fk_usuario)
        VALUES (${palavras}, ${acertos}, ${erros}, ${tempo}, ${idUsuario});
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    registrarResultado
};
