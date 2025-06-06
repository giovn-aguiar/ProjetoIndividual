var express = require("express");
var router = express.Router();

var frasesController = require("../controllers/frasesController");

router.get("/buscarFrases/:nivel", function (req, res) {
    frasesController.buscarFrases(req, res);
});

module.exports = router; 