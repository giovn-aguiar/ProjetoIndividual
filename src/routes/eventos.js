var express = require("express");
var router = express.Router();

var eventoController = require("../controllers/eventoController");

router.get("/listar", function (req, res) {
    eventoController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    eventoController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    eventoController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    eventoController.publicar(req, res);
});

router.put("/editar/:idEvento", function (req, res) {
    eventoController.editar(req, res);
});

router.delete("/deletar/:idEvento", function (req, res) {
    eventoController.deletar(req, res);
});

// rotas para confirmar presença:

router.post("/confirmar/:idEvento/:idUsuario", function (req, res) {
    eventoController.confirmar(req, res);
});

router.get("/mostrarConfirmadas/:idEvento", function (req, res) {
    eventoController.mostrarConfirmadas(req, res);
});

router.get("/listarEventosComConfirmacao/:idUsuario", function(req, res) {
    eventoController.listarEventosComConfirmacao(req, res);
});

// rota para cancelar a presença:

router.delete("/cancelar/:idEvento/:idUsuario", function(req, res) {
    eventoController.cancelar(req, res);
});



module.exports = router;