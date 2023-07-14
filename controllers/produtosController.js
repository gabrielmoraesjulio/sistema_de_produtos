const express = require("express")
const router = express.Router()

const produtosModel = require("../models/Produtos")

router.post("/novoproduto", async (req, res) => {
    await produtosModel.insertMany([{
        nomeProduto: req.body.nomeProduto,
        marcaProduto: req.body.marcaProduto,
        pesoProduto: req.body.pesoProduto,
        linhaProduto: req.body.linhaProduto,
        precoProduto: req.body.precoProduto,
        validadeProduto: req.body.validadeProduto
    }])

    res.redirect("index")
})

module.exports = router;