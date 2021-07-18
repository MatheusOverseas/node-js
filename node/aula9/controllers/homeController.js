exports.paginaInicial = (req, res) => {
  res.send(`
<form action="/" method="POST">
  nome: <input type="text" name="nome">
  Sobrenome: <input type="text" name="sobrenome">
  Idade: <input type="text" name="idade">
  cor: <input type="text" name="cor">
  <button>Enviar</button>
  </form>
  `);
};

exports.trataPost = (req, res) => {
  res.send(`Olá Recebemos seu formulário: ${req.body}`);
};
