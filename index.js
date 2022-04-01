const express = require('express')
const req = require('express/lib/request')
const { json } = require('express/lib/response')
const res = require('express/lib/response')
const app = express()
const port = 3000

//simular um dados de produtos
let listaProdutos = [
    {id:1, nome:"Pastel", preco:7}
];
let idAutoIncrement = 2; //cria var de autoincremento

app.use(express.json())
app.use(express.urlencoded())

app.get('/api/produtos', (req, res) => {
  res.json(listaProdutos);
})

app.get('/api/produtos/:id', (req,res) => {
    const id = req.params.id;
    const produto = listaProdutos.find((produto) => produto.id == id); 
    if(!produto){//se não encotrar produto, retorna 404
        res.status(404).json({erro:"Produto não encontrado"});
    }
    else{// se encontrou retorna o produto
        res.json(produto);
    }    
})

app.post("/api/produtos", (req,res) => {
    //pegar o produto
    const produto = req.body;
    //verificar se exite produto, tem nome e tem preço
    if (produto && produto.nome && produto.preco) {
        produto.id = idAutoIncrement++;
        listaProdutos.push(produto);//adiciono o produto na lista
        res.status(201).json(produto);//passa o status e o produto
    }
    else{
        //passa o erro 400 - bad request
        res.status(400).json({erro:"Falta parametros de produto"});
    }
     
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})