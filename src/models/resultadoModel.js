var database = require("../database/config");

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function registrarResultado(idUsuario, palavras, acertos, erros, tempo, ppm) {
    console.log("ACESSEI O RESULTADO MODEL \n\n function registrarResultado():", idUsuario, palavras, acertos, erros, tempo, ppm);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO resultados (id_usuario, palavras, acertos, erros, tempo, ppm)
        VALUES ('${idUsuario}', '${palavras}', ${acertos}, ${erros}, ${tempo}, ${ppm});
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrarResultado
};
