var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");

router.get("/", function (req, res) {
    res.render("index");
});

router.post("/jogo/registrar", resultadoController.registrarResultado);

module.exports = router;