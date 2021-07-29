const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");

function meuMiddleware(req, res, next) {
  console.log();
  console.log("passei no seu middle");
  console.log();
  next();
}
//rotas da home
route.get("/", homeController.paginaInicial);
route.post("/", homeController.trataPost);

//rotas de contato
route.get("/contato", contatoController.paginaInicial);

module.exports = route;
