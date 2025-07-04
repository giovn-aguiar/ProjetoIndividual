var eventoModel = require("../models/eventosModel");

function listar(req, res) {
    eventoModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    eventoModel.listarPorUsuario(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function pesquisarDescricao(req, res) {
    var descricao = req.params.descricao;

    eventoModel.pesquisarDescricao(descricao)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function publicar(req, res) {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    var idUsuario = req.params.idUsuario;
    var dataEvento = req.body.dataEvento;
    var horario = req.body.horario;
    var encontro= req.body.encontro;
    
    if (titulo == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (descricao == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } 
    else if (dataEvento == undefined) {
        res.status(403).send("A data do evento está indefinida!");
    }
    else if (horario == undefined) {
        res.status(403).send("O horário está indefinido!");
    }
    else if (encontro== undefined) {
        res.status(403).send("O local do encontro está indefinido!");
    }else {
        eventoModel.publicar(titulo, descricao, idUsuario, dataEvento, horario, encontro)
        .then(
            function (resultado) {
                console.log("Resultado do INSERT:", resultado);
                res.status(201).json({
                    mensagem: "Aviso publicado com sucesso!",
                    dados: resultado
                });
            }
        )
        
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function editar(req, res) {
    var novaDescricao = req.body.descricao;
    var idEvento = req.params.idEvento;

    eventoModel.editar(novaDescricao, idEvento)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function deletar(req, res) {
    var idEvento = req.params.idEvento;

    eventoModel.deletar(idEvento)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function confirmar(req, res) {
    var idEvento = req.params.idEvento;
    var idUsuario = req.params.idUsuario;

    eventoModel.confirmar(idEvento, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao confirmar presenca: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

//Criei essa função para mostrar no card dos eventos quantas presenças há:
function mostrarConfirmadas(req, res) {
    var idEvento = req.params.idEvento;

    eventoModel.mostrarConfirmadas(idEvento)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao confirmar presenca: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listarEventosComConfirmacao(req, res) {
    const idUsuario = req.params.idUsuario;

    eventoModel.listarEventosComConfirmacao(idUsuario)
        .then(resultados => {
            res.status(200).json(resultados);
        })
        .catch(erro => {
            console.error("Erro ao listar eventos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function cancelar(req, res) {
    var idEvento = req.params.idEvento;
    var idUsuario = req.params.idUsuario;

    eventoModel.cancelar(idEvento, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao cancelar a presenca: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

// puxar titulo para o editar
function mostrarInfos(req, res) {
    var idEvento = req.params.idEvento;

    eventoModel.mostrarInfos(idEvento)
        .then(resultado => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
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