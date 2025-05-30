var express = require("express");
var router = express.Router();

var kpiController = require("../controllers/kpiController");


router.get("/buscarPpmRecorde/:idUsuario", function (req, res) {
    kpiController.buscarPpmRecorde(req, res);
});


router.get("/buscarTempoRecorde/:idUsuario", function (req, res) {
    kpiController.buscarTempoRecorde(req, res);
});

router.get("/buscarDesempenhoRecorde/:idUsuario", function (req, res) {
    kpiController.buscarDesempenhoRecorde(req, res);
});


// medias:

router.get("/buscarPpmMedio/:idUsuario", function (req, res) {
    kpiController.buscarPpmMedio(req, res);
});

router.get("/buscarDesempenhoMedio/:idUsuario", function (req, res) {
    kpiController.buscarDesempenhoMedio(req, res);
});

router.get("/buscarTempoMedio/:idUsuario", function (req, res) {
    kpiController.buscarTempoMedio(req, res);
});

module.exports = router; 