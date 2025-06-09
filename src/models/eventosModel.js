var database = require("../database/config");

function listar() {
    console.log("ACESSEI O EVENTO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
            a.id_evento,
            a.titulo,
            a.descricao,
            a.fk_usuario,
            a.dataEvento,
            a.horario,
            a.encontro,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM eventos a
            INNER JOIN usuario u
                ON a.fk_usuario = u.id;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pesquisarDescricao(texto) {
    console.log("ACESSEI O EVENTO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucaoSql = `
        SELECT 
            a.id_evento,
            a.titulo,
            a.descricao,
            a.fk_usuario,
            a.dataEvento,
            a.horario,
            a.encontro,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM eventos a
            INNER JOIN usuario u
                ON a.fk_usuario = u.id
        WHERE a.descricao LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O EVENTO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
        SELECT 
            a.id_evento,
            a.titulo,
            a.descricao,
            a.fk_usuario,
            a.dataEvento,
            a.horario,
            a.encontro,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM eventos a
            INNER JOIN usuario u
                ON a.fk_usuario = u.id
        WHERE u.id = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(titulo, descricao, idUsuario, dataEvento, horario, encontro) {
    console.log("ACESSEI O EVENTO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, idUsuario);
    var instrucaoSql  = `
        INSERT INTO eventos (titulo, descricao, fk_usuario, dataEvento, horario, encontro) VALUES ('${titulo}', '${descricao}', ${idUsuario}, '${dataEvento}', '${horario}', '${encontro}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(novaDescricao, idEvento) {
    console.log("ACESSEI O EVENTO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idEvento);
    var instrucaoSql = `
        UPDATE eventos SET descricao = '${novaDescricao}' WHERE id_evento = ${idEvento};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(idEvento) {
    console.log("ACESSEI O EVENTO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idEvento);
    var instrucaoSql = `
        DELETE FROM eventos WHERE id_evento = ${idEvento};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function confirmar(idEvento, idUsuario) {
    console.log("ACESSEI O EVENTO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", idEvento);
    var instrucaoSql = `   
    INSERT INTO usuarioEvento (fk_evento, fk_usuario) VALUES (${idEvento}, ${idUsuario})`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mostrarConfirmadas(idEvento) {
    console.log("ACESSEI O EVENTO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", idEvento);
    var instrucaoSql = `   
        SELECT IFNULL(COUNT(fk_evento), 0) AS presencas
        FROM usuarioEvento 
        WHERE fk_evento = ${idEvento}
        GROUP BY fk_evento;
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarEventosComConfirmacao(idUsuario) {
    const instrucao = `
        SELECT fk_evento as id_evento
        FROM usuarioEvento
        WHERE fk_usuario = ${idUsuario};
    `;
    return database.executar(instrucao);
}

function cancelar(idEvento, idUsuario) {
    console.log("ACESSEI O EVENTO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idEvento);
    var instrucaoSql = `
        DELETE FROM usuarioEvento WHERE fk_evento = ${idEvento} AND fk_usuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mostrarInfos(idEvento){
    var instrucaoSql = `
       SELECT e.titulo, u.nome 
        FROM eventos e 
        JOIN usuario u 
        ON u.id = e.fk_usuario 
        WHERE id_evento = ${idEvento};
    `;
    return database.executar(instrucaoSql);
}



module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    editar,
    deletar,
    confirmar,
    mostrarConfirmadas,
    listarEventosComConfirmacao,
    cancelar,
    mostrarInfos
}
