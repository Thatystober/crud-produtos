const Produto = require("../model/produto");

const produtos = [
  {id:1, nome:"produto1", preco: 10 },
  {id:2, nome:"produto2", preco: 20 },
  {id:3, nome:"produto3", preco: 30 }
];

let idGerado = 4;

exports.listar = (req, res) => {
  Produto.find({}, (err, produtos) => {
    if(err){
      res.status(500).send(err);
    }
    res.json(produtos);
  })
}

exports.buscarPorId = (req, res) => {
  for (const produto of produtos) {
    if(req.params.id == produto.id) {
      return res.json(produto);
    }      
  }
  res.status(404).json({erro:"Produto nao encontrado"});
}

exports.inserir = (req, res) => {
  let novoProduto = new Produto(req.body);
  novoProduto.save((err, produto) =>{
    if(err){
      res.send(err);
    }
  })
  res.status(201).json(novoProduto);
}

exports.atualizar = (req, res) => {
  for (const produto of produtos) {
    if(req.params.id == produto.id) {
      produto.nome = req.body.nome;
      produto.preco = req.body.preco;
      return res.json(produto);
    }      
  }
  res.status(404).json({erro:"Produto nao encontrado"});
}

exports.deletar  = (req, res) => {
  for (const indice in produtos) {
    if(req.params.id == produtos[indice].id) {
      const produtoDeletado = produtos.splice(indice,1);
      return res.json(produtoDeletado[0]);
    }      
  }
  res.status(404).json({erro:"Produto nao encontrado"});
}