const express = require('express');

const server = express();

// quando formos receber route params através de métodos como PUT e DELETE,
// precisaremos preparar o endereço /users/:id <- para receber o parâmetro
server.get('/users/:index', (req, res) => {
  // capturando query params: http://api.com/users?nome=Yago
  const queryParams = req.query.nome;

  // capturando route params: http://api.com/users/1
  const routeParams = req.params.id;

  const users = ['Yago', 'Vithor', 'Isadora'];

  // refatorando a captura de route params, utilizando desestruturação
  const { index } = req.params;

  return res.json(
    // query_param: `${ queryParams }`,
    // route_param: `${ id }`,

    // message: `Buscando o usuário: ${ id }`

    users[index]
  );
});

server.listen(3000);