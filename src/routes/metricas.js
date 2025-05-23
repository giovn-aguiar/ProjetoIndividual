var express = require("express");
var router = express.Router();

var metricasController = require("../controllers/metricasController");

router.get("/buscarPpm/:idUsuario", function (req, res) {
    metricasController.buscarPpm(req, res);
});

router.get("/buscarErrosAcertos/:idUsuario", function (req, res) {
    metricasController.buscarErrosAcertos(req, res);
});

router.get("/buscarDesempenho/:idUsuario", function (req, res) {
    metricasController.buscarDesempenho(req, res);
});

router.get("/buscarTempo/:idUsuario", function (req, res) {
    metricasController.buscarTempo(req, res);
});


module.exports = router;