const produtos = [
  {id:1, nome:"produto1", preco: 10},
  {id:2, nome:"produto2", preco: 20},
  {id:3, nome:"produto3", preco: 35}
];

let idGerado = 4;

exports.listar = (req, res) => {
    res.json(produtos);
}

exports.buscarPorId =  (req, res) => {
    for (const produto of produtos){
        if(req.params.id == produto.id){
            res.json(produto);
        }
    }
    res.status(404).json({erro:"Produto não encontrado"});
}

exports.novoProduto = (req, res) => {
    const novoProduto = req.body;
    novoProduto.id = idGerado++;
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
}

exports.editarProduto = (req, res) => {
    for (const produto of produtos){
      if(req.params.id == produto.id){
        produto.nome = req.body.nome;
        produto.preco = req.body.preco;
        res.json(produto);
      }
    }
    res.status(404).json({erro:"Produto não encontrado"});
}

exports.deletarProduto = (req,res) => {
    for (const indice in produtos){
      if(req.params.id == produtos[indice].id){
        const produtoDeletado = produtos.splice(indice,1);
        res.json(produtoDeletado[0]);
      }
    }
}