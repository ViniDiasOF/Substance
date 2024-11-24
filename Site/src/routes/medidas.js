var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:id_usuario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:id_usuario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/countUsuario/", function (req, res) {
    medidaController.buscarUsuariosTotais(req,res);
})

router.get("/maiorMotivo/", function (req,res) {
    medidaController.buscarMotivosTotais(req,res);
})

router.get("/maisFamosa/", function (req,res) {
    medidaController.buscarMaisFamosa(req,res);
})

module.exports = router;