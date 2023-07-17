const mongoose = require("mongoose")
require("../db/connection")

const ProdutosSchema =  new mongoose.Schema({
    nomeProduto: {
        type: String,
        required: true
    },
    marcaProduto: {
        type: String,
        required: true
    },
    pesoProduto: {
        type: String,
        required: true
    },
    linhaProduto: {
        type: String,
        required: true
    },
    precoProduto: {
        type: String,
        required: true
    },
    validadeProduto: {
        type: String,
        required: true
    },
    disponivelProduto: {
        type: String, 
        required: true
    },
    quantidadeProduto: {
        type: String,
        required: true
    },
    imagemProduto: {
        type: String,
        required: true
    }
})

const Produtos = mongoose.model("Produtos", ProdutosSchema)

module.exports = Produtos;