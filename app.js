const express = require('express')
const produtoController = require('./controller/produto_controller')
const app = express()
const port = 3000

app.use(express.json());

app.get('/produtos', produtoController.listar);

app.get('/produtos/:id', produtoController.buscarPorId)

app.post('/produtos', produtoController.novoProduto)

app.put('/produtos/:id', produtoController.editarProduto)

app.delete('/produtos/:id', produtoController.deletarProduto)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})


