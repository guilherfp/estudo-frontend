var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

var contatos = [
  { id: 1, nome: "guilherme pacheco", telefone: "99999-9999", cor: "blue", data: new Date(), operadora: { nome: "OI", codigo: 14, categoria: "Celular", preco: 2 } },
  { id: 2, nome: "ANA da SILVA", telefone: "88888-8888", cor: "yellow", data: new Date(), operadora: { nome: "VIVO", codigo: 15, categoria: "Celular", preco: 1 } },
  { id: 3, nome: "maria dos prazeres", telefone: "77777-7777", cor: "red", data: new Date(), operadora: { nome: "TIM", codigo: 41, categoria: "Celular", preco: 3 } }
];

var operadoras = [
  { nome: "OI", codigo: 14, categoria: "Celular", preco: 2 },
  { nome: "VIVO", codigo: 15, categoria: "Celular", preco: 1 },
  { nome: "TIM", codigo: 41, categoria: "Celular", preco: 3 },
  { nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1 },
  { nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2 }
];

app.listen(process.env.PORT || 3412);

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Method', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/contatos', function (req, res) {
  res.json(contatos);
});

app.get('/contatos/:id', function (req, res) {
  contatos.forEach(function (contato) {
    if (contato.id == req.params.id) {
      res.json(contato);
      return;
    }
  });
  res.status(404).end();
});

app.post('/contatos', function (req, res) {
  var contato = req.body;
  contato.id = contatos.length + 1;
  contatos.push(contato);
  res.json(true);
});

app.get('/operadoras', function (req, res) {
  res.json(operadoras);
});