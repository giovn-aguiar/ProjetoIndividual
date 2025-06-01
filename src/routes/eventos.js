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



module.exports = router;