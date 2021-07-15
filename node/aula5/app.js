const path = require("path");
const caminhoArquivo = path.resolve(__dirname, "teste.json");
const escrita = require("./modules/escrever");
const ler = require("./modules/ler");

// const pessoas = [
//   { nome: "matheus" },
//   { nome: "Aline" },
//   { nome: "Thiago" },
//   { nome: "Rebeca" },
// ];

// const json = JSON.stringify(pessoas, "", 1);
// escrita(caminhoArquivo, json);

async function leArquivo(caminhoArquivo) {
  const dados = await ler(caminhoArquivo);
  renderizaDados(dados);
}

function renderizaDados(dados) {
  dados = JSON.parse(dados);

  for (let dado of dados) {
    console.log(dado.nome);
  }
  // dados.forEach((val) => console.log(val));
}

leArquivo(caminhoArquivo);
